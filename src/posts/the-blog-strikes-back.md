---
title: "ep v: the blog strikes back"
date: "2025-03-31"
---

![parody poster](the-blog-strikes-back.png)

In my last post, I landed on adding a blog. Simple enough in concept, but the next step was implementation: how to integrate it cleanly without disrupting the existing website structure.

My brain, naturally, went through a few stages of... let's call it "ideation."

### Option 1: The Heavyweight Approach ☢️

First thought? Go big. Maybe too big. Migrate the whole site over to Firebase, serve posts out of Firestore. While powerful, this quickly felt like overkill for a simple blog. Introducing complexities like necessary caching layers just to display blog content seemed disproportionate. Clearly, a more streamlined solution was needed.

### Option 2: The "Simple" Markdown Route 🤔

Okay, dial it back. How about just serving content straight from Markdown files? Seems reasonable on the surface. I looked into reading files directly in TypeScript, hoping for something easy like Python's `open`. Turns out, browsers are understandably cautious about letting frontends casually rifle through local files. The suggested path involved `fetch`, which could work, but it would necessitate manually managing a list of post titles and their corresponding file paths just to populate the blog's index page – a rather inelegant and potentially fragile solution requiring too much manual bookkeeping. The search continued.

### Option 3: The Jekyll Detour

Next, I considered Jekyll, a popular static site generator often paired with GitHub Pages. Seemed promising initially, but I encountered a fundamental integration challenge. Jekyll excels with its own HTML templating system, whereas my site was already happily living in React land. Trying to shoehorn Jekyll's output into my existing design felt architecturally misaligned – like the proverbial square peg in a round hole. Attempts to adapt Jekyll purely as a content-fetching API for the React frontend proved impractical.

### Option 4: The Unexpected Hero - `import.meta.glob` ✨

After some more digging, I stumbled upon `import.meta.glob`. Vanilla JavaScript has `import.meta`, which gives you info about the current code module, like its own URL. Useful, but not quite it. But `import.meta.glob`? That's a Vite-specific superpower. It lets you find and import multiple files using patterns – precisely what was needed for discovering all the .md files within a directory.

This felt like the right fit. I implemented a simple `BlogUtils` helper class (nothing too fancy) to encapsulate the logic for retrieving posts. This utility then feeds the content into a React component responsible for rendering the Markdown.

The advantages of this approach became clear:

1. Consistency: The blog seamlessly integrates with the rest of the site's look, feel, and React architecture. It avoids introducing disparate technologies or architectural clashes.
2. Simplicity: Adding a new blog post is now as simple as placing a new Markdown file in the designated `/src/posts` directory. The build process automatically discovers and incorporates it – no manual indexing or configuration updates required.
3. Zero Dependencies: Unlike a CMS or database-driven approach, this method doesn't introduce external dependencies or services that need maintenance or authentication.  

So, after evaluating options ranging from cloud databases to established static site generators, the most effective solution turned out to be leveraging a feature within my existing build tool. It's a good reminder that sometimes the most elegant answer is closer than you think.