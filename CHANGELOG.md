### 7.2

# New default font
- Updated default font to Kanit for a contemporary and polished appearance.
- This change removed tons of unused font files, reducing overall size of the extention.
- Bumped font version from v7 -> v15.

Bug fixes:
- Fix theme size iconsistency.
- Compress theme-icon to fix lag. (Decrease extention size by 500KB)
- Fix favorites long title bug, it is now limited 25 characters. 
- Fix removebtn hover effect not showing. 
- Fix version number snippet.
- Fix processing_bg incorrect position creating user confusion. 
- Fix default search icon not being used.
- Fix apps list on small screen. 

Performance and others
- Added "ttl" parameter to favorites icon (unavatar.io): 
This parameters sets after how much time the icon should be refreshed
and recached. The default is 24h, this commit increases this value to
28days instead. Reducing the amount of time the icons should be fetched
some unavatar.io servers. 
Note: This change will only apply to new favorites icons only. 

- Focus icons now use lazy loading.
- Reduce username input bar size. 