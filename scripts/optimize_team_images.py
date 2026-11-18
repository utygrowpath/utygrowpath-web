"""
Script untuk mengoptimasi dan mengompresi foto tim di public/tim.
Mengubah resolusi tinggi (4320x5400, ~15MB/foto) menjadi ukuran web (1080x1350, ~150-200KB/foto dalam format WebP).
Juga memperbarui path di src/data/panitia.ts agar sesuai dengan format .webp.
"""

import os
import sys
from pathlib import Path
from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_TIM = PROJECT_ROOT / "public" / "tim"
PANITIA_TS = PROJECT_ROOT / "src" / "data" / "panitia.ts"

TARGET_WIDTH = 1080
QUALITY = 85

def optimize_images():
    if not PUBLIC_TIM.exists():
        print(f"Error: Folder {PUBLIC_TIM} tidak ditemukan.")
        sys.exit(1)

    image_files = list(PUBLIC_TIM.rglob("*.png"))
    if not image_files:
        print("Tidak ada file PNG ditemukan di public/tim.")
        # Cek apakah sudah berupa webp
        webp_files = list(PUBLIC_TIM.rglob("*.webp"))
        if webp_files:
            print(f"Ditemukan {len(webp_files)} file WebP yang sudah ada.")
        return

    print(f"Memproses {len(image_files)} foto tim...")
    
    total_original_bytes = 0
    total_new_bytes = 0
    converted_count = 0

    for img_path in image_files:
        orig_size = img_path.stat().st_size
        total_original_bytes += orig_size

        try:
            with Image.open(img_path) as img:
                # Konversi jika format RGBA/RGB
                if img.mode not in ("RGB", "RGBA"):
                    img = img.convert("RGBA")

                # Hitung ukuran proporsional (target lebar 1080px)
                w, h = img.size
                if w > TARGET_WIDTH:
                    new_h = int(h * (TARGET_WIDTH / w))
                    img_resized = img.resize((TARGET_WIDTH, new_h), Image.Resampling.LANCZOS)
                else:
                    img_resized = img

                # Simpan sebagai WebP
                webp_path = img_path.with_suffix(".webp")
                img_resized.save(webp_path, "WEBP", quality=QUALITY, method=6)

            new_size = webp_path.stat().st_size
            total_new_bytes += new_size

            # Hapus file PNG asli setelah berhasil disimpan
            img_path.unlink()
            converted_count += 1

            rel_path = webp_path.relative_to(PROJECT_ROOT)
            print(f"[OK] {rel_path} ({orig_size / (1024*1024):.1f}MB -> {new_size / 1024:.1f}KB)")

        except Exception as e:
            print(f"[ERR] Gagal memproses {img_path.name}: {e}")

    # Update src/data/panitia.ts jika ada
    if PANITIA_TS.exists():
        print("\nMemperbarui path gambar di src/data/panitia.ts...")
        content = PANITIA_TS.read_text(encoding="utf-8")
        # Ganti semua /tim/.../*.png menjadi .webp
        new_content = content.replace('.png"', '.webp"')
        PANITIA_TS.write_text(new_content, encoding="utf-8")
        print("src/data/panitia.ts berhasil diperbarui ke .webp.")

    orig_mb = total_original_bytes / (1024 * 1024)
    new_mb = total_new_bytes / (1024 * 1024)
    reduction = ((total_original_bytes - total_new_bytes) / total_original_bytes) * 100 if total_original_bytes else 0

    print("\n" + "="*50)
    print(f"Total berhasil dikonversi: {converted_count} file")
    print(f"Ukuran awal  : {orig_mb:.2f} MB")
    print(f"Ukuran akhir : {new_mb:.2f} MB")
    print(f"Hemat ruang  : {orig_mb - new_mb:.2f} MB ({reduction:.1f}% berkurang)")
    print("="*50)

if __name__ == "__main__":
    optimize_images()
