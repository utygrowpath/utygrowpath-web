"use client";

import Image from "next/image";
import { useState } from "react";

export default function PendaftaranPesertaPage() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [status, setStatus] = useState<"mahasiswa" | "umum">("mahasiswa");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaLengkap.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-x-hidden bg-[#fff9f0] px-4 py-8 text-[#30302f] sm:py-12">
      {/* Background Decorative Motifs */}
      <Image
        src="/images/2026/season4/motif/motif1.png"
        width={320}
        height={320}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-10 z-0 w-48 opacity-[0.12] sm:w-64"
      />
      <Image
        src="/images/2026/season4/motif/motif3.png"
        width={320}
        height={320}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-20 z-0 w-48 opacity-[0.12] sm:w-64"
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Top Header Identity */}
        <div className="mb-5 flex flex-col items-center text-center">
          <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e0b83e]/50 bg-white p-2 shadow-md shadow-[#e0b83e]/15">
            <Image
              src="/images/2026/season4/logo/gowpaths4.png"
              width={120}
              height={120}
              alt="Logo UTY Growpath Expo"
              className="h-12 w-12 object-contain"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ed8b36]/30 bg-[#ed8b36]/10 px-3 py-0.5 text-[11px] font-bold tracking-wider text-[#8d493a] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ed8b36]" />
            Season 4 Check-In Pass
          </span>
          <p className="mt-3 text-xs font-bold text-[#736c64]">
            Silakan lengkapi data kedatangan Anda!
          </p>
        </div>

        {/* Digital Event Pass / Ticket Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#eadbbd] bg-white shadow-[0_20px_50px_-20px_rgba(77,55,28,0.25)]">
          <div className="p-6 sm:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Field 1: Nama Lengkap */}
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-xs font-bold tracking-wider uppercase text-[#6f5630]"
                  >
                    Nama Lengkap
                  </label>
                  <div className="relative mt-2">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#8a8580]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <input
                      id="nama"
                      type="text"
                      required
                      autoComplete="name"
                      autoCapitalize="words"
                      value={namaLengkap}
                      onChange={(e) => setNamaLengkap(e.target.value)}
                      placeholder="Masukkan nama lengkap Anda..."
                      className="h-13 w-full rounded-2xl border border-[#eadbbd] bg-[#fffdfa] pl-12 pr-4 text-sm font-medium text-[#2b4869] placeholder-[#9c958c] transition-all focus:border-[#2b4869] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#2b4869]/10"
                    />
                  </div>
                </div>

                {/* Field 2: Status Peserta (Segmented Cards) */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#6f5630]">
                    Status Kehadiran
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {/* Kartu Mahasiswa */}
                    <button
                      type="button"
                      onClick={() => setStatus("mahasiswa")}
                      className={`relative flex flex-col items-center justify-center rounded-2xl border p-3.5 text-center transition-all ${
                        status === "mahasiswa"
                          ? "border-[#d98a1c] bg-[#fff9f0] text-[#2b4869] shadow-sm ring-2 ring-[#d98a1c]/30 hover:bg-[#fff6e6]"
                          : "border-[#eadbbd] bg-white text-[#625b54] hover:border-[#d98a1c]/40 hover:bg-[#fffbf5]"
                      }`}
                    >
                      <span className="text-2xl">🎓</span>
                      <span className="mt-1.5 text-sm font-bold leading-tight">
                        Mahasiswa
                      </span>
                      {status === "mahasiswa" && (
                        <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d98a1c] text-[10px] font-bold text-white shadow-xs">
                          ✓
                        </span>
                      )}
                    </button>

                    {/* Kartu Umum */}
                    <button
                      type="button"
                      onClick={() => setStatus("umum")}
                      className={`relative flex flex-col items-center justify-center rounded-2xl border p-3.5 text-center transition-all ${
                        status === "umum"
                          ? "border-[#d98a1c] bg-[#fff9f0] text-[#2b4869] shadow-sm ring-2 ring-[#d98a1c]/30 hover:bg-[#fff6e6]"
                          : "border-[#eadbbd] bg-white text-[#625b54] hover:border-[#d98a1c]/40 hover:bg-[#fffbf5]"
                      }`}
                    >
                      <span className="text-2xl">👥</span>
                      <span className="mt-1.5 text-sm font-bold leading-tight">
                        Umum
                      </span>
                      {status === "umum" && (
                        <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d98a1c] text-[10px] font-bold text-white shadow-xs">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Perforated Divider (Efek Tiket Robek) */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="absolute -left-10 h-6 w-6 rounded-full bg-[#fff9f0] border-r border-[#eadbbd]" />
                  <div className="w-full border-t border-dashed border-[#eadbbd]" />
                  <div className="absolute -right-10 h-6 w-6 rounded-full bg-[#fff9f0] border-l border-[#eadbbd]" />
                </div>

                {/* Action Button: Masuk */}
                <button
                  type="submit"
                  className="group relative flex h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#d98a1c] px-6 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#d98a1c]/25 transition-all duration-300 hover:bg-[#d98a1c]/80 hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Masuk</span>
                </button>
              </form>
            ) : (
              /* Success / Verified Digital E-Pass State */
              <div className="flex flex-col items-center text-center">
                {/* Green Success Badge Icon */}
                <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-md ring-8 ring-emerald-500/10">
                  <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400/20 duration-1000" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative h-10 w-10 text-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.74-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Check-In Terverifikasi
                </span>

                {/* Digital Visitor Badge Box */}
                <div className="mt-5 w-full rounded-2xl border border-[#eadbbd] bg-gradient-to-b from-[#fffdfa] to-[#fff9f0] p-5 shadow-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a8580]">
                    Nama Peserta
                  </p>
                  <p className="mt-0.5 text-xl font-extrabold text-[#2b4869] break-words">
                    {namaLengkap}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-2 border-t border-[#eadbbd]/60 pt-3.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#2b4869] px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white shadow-xs">
                      {status === "mahasiswa" ? "Mahasiswa" : "Umum"}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-[#736c64]">
                  Tunjukkan layar ini kepada petugas di pintu masuk. Selamat menikmati <strong>UTY Growpath Expo Season 4</strong>!
                </p>

                {/* Action Button: Eksplor Venue */}
                <div className="mt-6 flex flex-col items-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => {
                      // Placeholder aksi untuk navigasi ke denah/venue
                      alert("Fitur Eksplorasi Venue segera hadir!");
                    }}
                    className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#d98a1c] px-6 text-sm font-bold tracking-wide text-white shadow-md shadow-[#2b4869]/20 transition-all duration-300 hover:bg-[#d98a1c]/80 hover:shadow-lg active:scale-[0.98]"
                  >
                    <span>Eksplor Venue</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info note */}
        <p className="mt-6 text-center text-xs text-[#8a8580]">
          © 2026 UTY Growpath Expo Season 4
        </p>
      </div>
    </div>
  );
}
