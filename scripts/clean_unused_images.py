import os
import shutil

deleted_count = 0
deleted_bytes = 0

# 1. Remove public/S4
if os.path.exists('public/S4'):
    for root, dirs, files in os.walk('public/S4'):
        for f in files:
            deleted_bytes += os.path.getsize(os.path.join(root, f))
            deleted_count += 1
    shutil.rmtree('public/S4')
    print('Deleted public/S4 folder')

# 2. Remove public/sudutinspirasi
if os.path.exists('public/sudutinspirasi'):
    for root, dirs, files in os.walk('public/sudutinspirasi'):
        for f in files:
            deleted_bytes += os.path.getsize(os.path.join(root, f))
            deleted_count += 1
    shutil.rmtree('public/sudutinspirasi')
    print('Deleted public/sudutinspirasi folder')

# 3. Individual unused files
individual_files = [
    'public/images/2026/season4/dokumentasi/docum3.jpg',
    'public/images/2026/season4/dokumentasi/docum4.jpg',
    'public/images/2026/season4/dokumentasi/docum5.png',
    'public/images/2026/season4/dokumentasi/docum6.png',
    'public/images/2026/season4/motif/line-batik - 3.svg',
    'public/images/2026/season4/motif/line-batik - 4.svg',
    'public/images/2026/season4/motif/line-batik - 5.svg',
    'public/images/2026/season4/motif/line-batik - 6.svg',
    'public/images/2026/season4/motif/banner.png',
    'public/images/2026/tenant/tenant11.jpg',
    'public/images/2026/tenant/profile/tenant11.jpg',
    'public/images/2026/our-team/placeholder.svg',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-menu.png',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-expo.png',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-stand.png',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-team.png',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-journey.png',
    'public/images/2026/sudut-inspirasi/s4/bakso-bakbar-syafii.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-campus.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-garlic-bread.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-team.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-numa.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-cookies.png',
    'public/images/2026/sudut-inspirasi/s4/kkuee-package.png',
    'public/file.svg',
    'public/globe.svg',
    'public/next.svg',
    'public/vercel.svg',
    'public/window.svg',
]

for f in individual_files:
    if os.path.exists(f):
        deleted_bytes += os.path.getsize(f)
        os.remove(f)
        deleted_count += 1
        print(f'Deleted: {f}')

print(f'\nTotal deleted: {deleted_count} files ({deleted_bytes / (1024*1024):.2f} MB freed)')
