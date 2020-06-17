---
slug: /blog/live-stream-zoom-video-calls-meetings-instagram-live
layout: blog
published: true
date: 2020-17-01
title: Live stream with multiple users to Instagram Live from Zoom or Google Meet using OBS and Streamon
description: Learn how to stream your zoom calls, Goole meet calls or Whereby calls into Instagram live from your PC using OBS Studio and Streamon.
author: Musthaq Ahamad
username: haxzie
keywords:
  - instagram
  - OBS studio
  - Zoom
  - Google Meet
  - instagram live
  - streaming
cover_image: ./cover.png
---

Ever wondered how cool it'd be to host an Instagram Live session with multiple users? Well it's even more fun when you can leverage OBS studio to add cool effects and screens to your live streams on Instagram. In this tutorial we'll learn how to Go Live on instagram from your online meeting sessions on Zoom or Google Meet using OBS Studio and Streamon directly from your PC.
> Throughout the blog we'll be using examples using [Whereby](https://whereby.com), which is an online video call/meeting platform just like [Google meet](https://meet.google.com) or [Zoom](https://zoom.us). The steps will be similar if you are using any of the online meeting softwares.


Before we start make sure you have signed up or installed all the required softwares in your system.
- [OBS Studio](https://obsproject.org)
- [Streamon](https://getstreamon.com)
- Account on any of the video calling softwares [Zoom](https://zoom.us), [Google Meet](https://meet.google.com), Or [Whereby](https://whereby.com) (recommended)

## 1. Starting your video call or meeting online
First step is to create an account on any of the online video calling or meeting softwares like [Google Meet](https://meet.google.com), [Zoom](https://zoom.us) or [Whereby](https://whereby.com) and start the video calling session with your desired participants. Once you started the call make sure all your participants are visible on your screen (_not necessary to have you on the screen, since we can use your webcam's feed directly into OBS studio_);

<Image src="./video-call.png" alt="Video call screenshot"/>
<span style="text-align: center; display: block; font-size: 1rem">Video Call using Whereby</span>



The above example is using Whereby, you can use Zoom, Google Hangouts, Skype or any of your favorite app and invite any number of users.

## 1. Setting up OBS Studio

Head over to OBS Studio's [home page](https://obsproject.com/) to download and install the Software on your system. Once the installation is complete open OBS Studio.

<Image src="./obs-ss.png" alt="OBS Studio Start Screen"/>
<span style="text-align: center; display: block; font-size: 1rem">OBS studio start screen</span>

### Configuring a new stream profile and video output

Most of your viewers will be on a mobile device and mobile device screens are of a different aspect ration than your computer. Click on **Profile** menu on OBS at the top and click on **New Profile** and name the Profile as `Instagram Streaming`.

Now, Click on **settings** in the bottom right panel and go to the **Video tab**. Change the **Base (canvas) Resolution** to any of the **9:16** aspect ratio, in my case it's `900x1600` of my monitor. And, set the **Output (scaled) resolution** to `720x1280`. Click on **Apply** and **OK**.

<Image src="./obs-video-settings.png" alt="OBS video settings"/>
<span style="text-align: center; display: block; font-size: 1rem">OBS video settings screen</span>

### Including the video calls form browser to OBS Studio
Once you are done setting up OBS Studio, we can start working on bringing the video call from the browser to OBS Studio. Click on the "+" icon in the bottom "Sources" tab and choose **Window Capture** and choose your browser window which is used for the video call or the application (zoom) through which you are having the video call.
 
<Image src="./obs-video-call.png" alt="Stream on OBS"/>
<span style="text-align: center; display: block; font-size: 1rem">Your video call on OBS</span>

You can use the handles to transform the preview and fit it to the screen, or hold alt ant drag the red handles to crop the preview for one user. Once you crop the preview for one user, you can repeat the above to step to add the same window capture again into OBS Source and crop out to get each other users as well.

<Image src="./obs-video-each-users.png" alt="Video call stream on OBS"/>
<span style="text-align: center; display: block; font-size: 1rem">All the users from the video call on stream</span>

If you want to add yourself into the Stream from your PC attached web cam or other camera devices connected, use the **Video Source** Option instead of **Window Capture** and choose your target device while adding the source.

Make sure you have unmuted the **Desktop Audio** and **Mic/Aux** or any mic connected to your PC from the Audio Mixed tab at the bottom center of OBS.

You can save your current configuration and resuse it for future usecases.

## 3. Using Streamon to create a live stream to Instagram

Once you haver configured your streaming setup, you can now use [Streamon](https://getstreamon.com) to start an Instagram Live session. Open **Streamon (instagram-live-streamer)** on your PC and login to your Instagram account. After logging in click on **Start live stream**, you will be greeted with a screen containing your **Stream URL** and **Stream key**. DONOT click on **GO LIVE** yet!

<Image src="./streamon-creds.png" alt="Streamon - Instagram live credentials"/>
<span style="text-align: center; display: block; font-size: 1rem">Streamon - Instagram live credentials</span>

### Configuring OBS Studio with stream credentials

Now, open your OBS studio instance and click on settings and go to **Stream** tab. In the service, make sure to select **Custom** and then copy paste the **Server URL/Stream URL** and the **Stream Key** from the Streamon app into OBS. Make sure the `use authentication` check box is **Unchecked**. Click on apply and ok.

<Image src="./obs-stream-config.png" alt="OBS Live Config"/>
<span style="text-align: center; display: block; font-size: 1rem">Configuring OBS Stream configuration</span>

Now, on the bottom right panel near the **Settings Button** click on **Start Stream!**. Once the stream is started, quickly go to the Streamon app and click on **Go Live** Button. Voila! You are now live on Instagram streaming through OBS Studio. You can click on the comment icon on the bottom to see your live comments from Instagram.

<Image src="./streamon-live.png" alt="Streamon - Instagram live"/>
<span style="text-align: center; display: block; font-size: 1rem">Streamon - Instagram live</span>

If you wish to see your stream and live chat on Instagram, simply sign in to your Instagram account from your PC's Browser and goto `https://instagram.com/USERNAME/live`. Replace the `USERNAME` with your Instagram username.

<Image src="./live-video-calls.png" alt="Streaming your calls in Instagram Lice"/>
<span style="text-align: center; display: block; font-size: 1rem">Your Instagram live with multiple users</span>

> Please Note, you won't be able to view your live stream from the Instagram mobile app or desktop directly. You can see the stream through the above method or login via a different Instagram account to view your stream.

To Stop the live stream, simply click on stop live stream from your OBS Studio and then from the Streamon app.


### Stuck with something? Need help?
Head over to our community channel on [Telegram (t.me/streamonhq)](https://t.me/streamonhq) or Tweet to us at [@streamonhq](https://twitter.com/streamonhq) to get help from the community.

Found this project helpful? Consider supporting us via [BuyMeACoffee](https://buymeacoff.ee/haxzie) 💖 