---
slug: /blog/instagram-live-obs-studio-windows-linux-mac
layout: blog
published: true
date: 2020-01-31
title: Stream to Instagram live with Streamon and OBS Studio from your PC
description: Learn how to start a live stream to Instagram live from you Windows/Linux/MacOS computer with OBS Studio or any broadcasting software.
author: Musthaq Ahamad
username: haxzie
keywords: 
    - instagram
    - OBS studio
    - Windows
    - PC
    - instagram live
cover_image: ./cover.png
---

Instagram is a great platform for artists, creators, businessess because of it's huge user base. Getting your brand out there on Instagram means you have to make sure your audience are enganged. There are a lot of different ways to put your content out there on Instagram and create a brand profile. Instagram live is a feature which helps Instagram users to go live to their followers, but here's the catch. Instagram live only works on your phone and it only supports streaming through their official mobile app.

## How can I go live on Instagram from my PC/Laptop?

You have your high end camera's, sound system and a high-end PC setup in your studio, or you simply want to stream a YouTube video or a live video call on Instagram. But, Instagram only support streaming through their offical app. Introducing [Streamon](https://getstreamon.com)! This tiny app can help you setup live streaming to instagram live with all your studio setup right from your Windows/Linux/Mac machine.

Follow these simple steps to setup live streaming to Instagram directly from your PC.
- You need an [Instagram](https://instagram.com) account
- Download and Install [Streamon](https://getstreamon.com) Client
- Download and Install [OBS Studio](https://obsproject.com/)

## 1. Setting up OBS Studio
Head over to OBS Studio's [home page](https://obsproject.com/) to download and install the Software on your system. Once the installation is complete open OBS Studio.

<Image src="./obs-ss.png" alt="OBS Studio Start Screen"/>
<span style="text-align: center; display: block; font-size: 1rem">OBS studio start screen</span>

### Configuring a new stream profile and video output
Most of your viewers will be on a mobile device and mobile device screens are of a different aspect ration than your computer. Click on **Profile** menu on OBS at the top and click on **New Profile** and name the Profile as `Instagram Streaming`.

Now, Click on **settings** in the bottom right panel and go to the **Video tab**. Change the **Base (canvas) Resolution** to any of the **9:16** aspect ratio, in my case it's `900x1600` of my monitor. And, set the **Output (scaled) resolution** to `720x1280`. Click on **Apply** and **OK**.

<Image src="./obs-video-settings.png" alt="OBS video settings"/>
<span style="text-align: center; display: block; font-size: 1rem">OBS video settings screen</span>

### Adding a video source
Once we configured the video output, we need to add a video source. Connect your camera, or you can simply use your PC's screencast to be used as a video source. Click on the **+** icon from the bottom left, second panel which says **Sources** and click on any Video source that you want. In here, I'll be using my PC's screen capture, you can choose your Camera's listed there. A popup will open, click on okay and you can start configuring the view.

Once you have added the view, you can click on the preview and use the handles to drag the added source to fit to the canvas.

<Image src="./obs-screen-share.png" alt="OBS screen share"/>
<span style="text-align: center; display: block; font-size: 1rem">OBS aligning a source to canvas</span>

If you want to rotate the scene to a landscape mode so as to cover the entire canvas, right click on the preview and **Transform** -> **Rotate 90 degree**.

## 2. Starting a live stream with Streamon
Once you have configured your OBS studio, quickly open [Streamon](https://getstreamon.com) and sign in to your Instagram account. After logging in click on **Start live stream**, you will be greeted with a screen containing your **Stream URL** and **Stream key**. DONOT click on **GO LIVE** yet!

<Image src="./streamon-creds.png" alt="Streamon - Instagram live credentials"/>
<span style="text-align: center; display: block; font-size: 1rem">Streamon - Instagram live credentials</span>

### Configuring OBS Studio with stream credentials
Now, open your OBS studio instance and click on settings and go to **Stream** tab. In the service, make sure to select **Custom** and then copy paste the *Server URL/Stream URL** and the **Stream Key** from the Streamon app into OBS. Click on apply and ok. Now, on the bottom right panel near the **Settings Button** click on **Start Stream!**. Once the stream is started, quickly go to the Streamon app and click on **Go Live** Button. Voila! You are now live on Instagram streaming through OBS Studio.

<Image src="./streamon-live.png" alt="Streamon - Instagram live"/>
<span style="text-align: center; display: block; font-size: 1rem">Streamon - Instagram live</span>

## 3. Managing live chat
Once you are live, a small speech bubble icon will appear on the bottom right. Clicking on that will open the Live Chat to your stream, if you wish to diable chat, simply toggle the switch on top to mute the chat.

<Image src="./streamon-chat.png" alt="Streamon - Instagram live chat"/>
<span style="text-align: center; display: block; font-size: 1rem">Streamon - Instagram live chat</span>

If you wish to see your stream and live chat on Instagram, simply sign in to your Instagram account from your PC's Browser and goto `https://instagram.com/USERNAME/live`. Replace the `USERNAME` with your Instagram username.

> Please Note, you won't be able to view your live stream from the Instagram mobile app or desktop directly. You can see the stream through the above method or login via a different Instagram account to view your stream.


<Image src="./instagram-live.png" alt="Live on Instagram"/>
<span style="text-align: center; display: block; font-size: 1rem">You're live on Instagram!</span>

To Stop the live stream, simply click on stop live stream from your OBS Studio and then from the Streamon app.

### Stuck with something? Need help?
Head over to our community channel on [Telegram (t.me/streamonhq)](https://t.me/streamonhq) or Tweet to us at [@streamonhq](https://twitter.com/streamonhq) to get help from the community.

Found this project helpful? Consider supporting us via [BuyMeACoffee](https://buymeacoff.ee/haxzie) 💖 