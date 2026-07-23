# rspress-plugin-third-parties Demo

Welcome to the live interactive demo site for **`rspress-plugin-third-parties`**!

***

## 🗺️ Live Google Maps Embed


```mdx
import { GoogleMapsEmbed } from 'rspress-plugin-third-parties';

<GoogleMapsEmbed 
  apiKey="YOUR_API_KEY" 
  mode="place" 
  q="Point Pedro, Sri Lanka" 
  height={400} 
  zoom="14"
/>
```

***

## 🎬 Lazy-Loaded YouTube Player


```mdx
import { YouTubeEmbed } from 'rspress-plugin-third-parties';

<YouTubeEmbed 
  videoid="sSbDtQTtwBY" 
  height={400} 
  playlabel="Play Rspress Demo" 
/>
```

***

## ⚡ Custom Script Component


```mdx
import { Script } from 'rspress-plugin-third-parties';

<Script 
  id="san-web-maker-demo"
  src="https://sanjaiyan-cool.web.app/script/v1/1/SanWebMaker.js" 
  strategy="lazyOnload" 
  onReady={() => {
    window?.sanScrollTop?.("👆", "#00001c")
  }}
/>
```
