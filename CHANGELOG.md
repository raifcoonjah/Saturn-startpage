### 7.2
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
some unavatar.io servers
- Focus icons now use lazy loading.
- Reduce username input bar size. 