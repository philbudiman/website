---
title: "new beginnings"
date: "2025-05-19"
---

![walt-disney](walt-disney.jpg)

I built my first personal website in January 2022 as a little pet project. I was on winter break, in the middle of internship application season, trying to find ways to strengthen my resume—since, as most students have experienced at one point or another, mine had a distinct lack of work experience.

Reddit threads and the like gave me the idea to build *something*, *anything* I could list on my resume as a side project. A personal website felt like a good choice: (a) it wasn’t too technically challenging, (b) it gave me frontend experience, and (c) it let me test my design chops and think about what I wanted to say about myself.

Since I already had some experience with Angular from a previous summer internship—and React’s documentation overwhelmed me with its seemingly never-ending list of hooks—I decided to stick with what I knew and built it in Angular.

Structurally, it was similar to the version I have now (minus a blog, plus a contact-me page). But in hindsight, there are definitely things I’d do differently.

First off, it had a weird bug where the cursive SVG on the landing page would render oddly on Safari. On Chrome and everything else I tested, it worked great—but not on Safari on Mac. Odd.

Second, while I *did* add mobile responsiveness, I kept the desktop hamburger menu as-is instead of making a full-screen menu view like I have now. That definitely wouldn’t fly with me today—but hey, that was my first shot at building a personal website.

Anyway. An internship, a first job, a first layoff, and a second job later, I decided: *"Hey, maybe I should update my personal website."*

I still had the domain, after all, so it felt like a waste to just let the old site sit there outdated. I wasn’t still a junior CS student three years later.

I took a look at it, and yeah—safe to say it was an easy decision to rebuild it from the ground up. The biggest reason? I just wasn’t familiar with Angular anymore.

By this point, I’d used React with TypeScript for essentially my entire professional career—at Twitch, at Eightfold, even at Basil (a small startup a few friends and I tried running in college). So after three-ish years of React and frontend work, it felt way easier to rebuild the site in a framework I actually knew.

So, I went ahead and did it—same general site structure, with some changes:

1. Removed the "Contact Me" page since (a) it was built using a janky Google Sheets script that technically worked but wasn’t elegant, and the bigger reason being (b) it wasn’t used nearly enough to justify including again.

2. Fixed the cursive logo not rendering properly in Safari. Turned out it was because the font wasn’t system-preinstalled, so it wasn’t rendering correctly.

3. Added support for dark mode. The original site had everything in plain white as an homage to Apple’s early-mid 2010s design (also what inspired the cursive "phil" font, a nod to the ‘84 Macintosh). While it looked clean, it probably wasn’t the easiest on the eyes at night. Now, dark mode respects the device’s preference and saves the preferred value in local storage.

While I’d love to say the site’s “complete,” I wouldn’t change a thing, blah blah blah—I can almost guarantee I’ll think of some improvement down the line and end up building it.

I think the following Walt Disney quote sums it up pretty well:

> “Disneyland will never be completed. It will continue to grow as long as there is imagination left in the world.”

Now admittedly, this website is *not* Disneyland. It’s not even remotely close to being as fun as Disneyland. But I feel like the quote captures the builder’s mentality pretty well: As long as someone’s alive to think about it, there’s almost always something you can improve.
