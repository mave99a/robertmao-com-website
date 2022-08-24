---
layout: MyLayout
title: Examples
description: This page is for examples

blocks:
  - name: SectionHero
    title: Welcome !
    description: This is My new home powered by Blocklet & XMark. Stay tunned!
  - name: SectionBlock
    background:
      image: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
    title: Embedded ability
    description: Embedded Twitter or YouTube easily
    image:
      - name: TwitterTimelineEmbed
        sourceType: profile
        screenName: mave99a
  - name: SectionBlock
    background:
      color: '#ffee00'
    title: My Current Project
    description: Checkout the coolest project I am working on!
    image:
      - name: YouTube
        videoId: K-J7qU1CNSo
    reverse: true
  - name: SectionCardList
    center: false
    title: Post from ArcBlock
    type: article
    list:
      - title: 2022-08-21
        description: A Simple Decentralized Image Generator
        image: https://www.arcblock.io/blog/static/1594846f9cf03d8f11f5c9a8b8fdf67f/35ea2/page-home.png
        link: https://www.arcblock.io/blog/en/post/2022/08/21/image-generator
        target: _blank
        actions:
          name: Button
          text: Read More
          endIcon: i-mdi:arrow-right-thin
      - title: 2022-08-20
        description: ArcBlock to attend and present at DWeb Camp 2022
        image: https://www.arcblock.io/blog/static/c53a49970138d9ff598e4ad9e74b3543/3f026/cover.png
        link: https://www.arcblock.io/blog/en/post/2022/08/20/dwebcamp
        target: _blank
        actions:
          name: Button
          text: Read More
          endIcon: i-mdi:arrow-right-thin
      - title: 2022-08-18
        description: ArcBlock to attend Gartner Identity & Access Management Summit in Las Vegas
        image: https://www.arcblock.io/blog/static/a3696925d1ef7479c3cb474f70e77731/11382/cover.jpg
        link: https://www.arcblock.io/blog/en/post/2022/08/18/gartner-iam-summit
        target: _blank
        actions:
          name: Button
          text: Read More
          endIcon: i-mdi:arrow-right-thin
  - name: SectionLogoWall
    title: Who are using Blocklet Pages?
    list:
      - src: ./logos/blocklet.png
        link: https://developer.blocklet.io
      - src: ./logos/create.png
        link: https://createblocklet.dev
      - src: ./logos/launcher.svg
        link: https://launcher.blocklet.io
      - src: ./logos/store.png
        link: https://store.blocklet.io
      - src: ./logos/connect.svg
        link: http://didconnect.io
      - src: ./logos/wallet.svg
        link: https://didwallet.io
      - src: ./logos/motif.svg
        link: http://motif.didlags.org

  - name: BigText
    tag: ''
    text: The doc that brings words, data, & teams together.
    size: 5em
    bg: 'linear-gradient(to right top, #ed780e, #ea9800, #e0b600, #d0d400, #b8f03b)'
  - name: BigText
    text: In a world full of applications, why do documents and spreadsheets still run the world? And why haven’t they been updated in over 50 years? Coda is a new kind of doc that brings words, data, and teams together. It comes with a set of building blocks that anyone can combine to create a doc as powerful as an app.
    size: 2em
    bg: 'linear-gradient(to right top, #ede4e9, #ebe5f3, #e0e9fd, #cfefff, #c1f5fa, #bdf7f5, #bbf9ed, #bdfae4, #b5fbe8, #acfded, #a2fef2, #98fff8)'
---
