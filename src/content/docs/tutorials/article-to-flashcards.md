---
title: "Turn an article into flashcards"
description: "Generate question-and-answer flashcards from the article you just read, quiz yourself, and export them."
---

[中文](/zh/tutorials/article-to-flashcards/) · [All use cases](/tutorials/)

:::note[Start small]
This is a prompt template for a workflow, not a verified case study. Results depend on the site, the page you have open and the model. Review the output before acting on it, and keep anything that changes an account (submit, send, book, buy) for your own hands.
:::

The best time to make flashcards is right after reading, and the worst time to open a flashcard app is right after reading. Dassi makes them from the page you are on.

## Before you start

New to Dassi? Follow the [installation guide](/getting-started/installation/) and [model setup guide](/guides/connect-ai-provider/).

Read the article first. Then open Dassi on the same tab.

## 1. Generate the cards

```text
Make 10 flashcards from this article. Each card: a question on the front, a one- or two-sentence answer on the back, using only information stated in the article.
Prefer definitions, key claims and numbers over trivia. Show them as a numbered list.
```

## 2. Quiz, then export

```text
Quiz me one card at a time: show the question, wait for my answer, then show the correct answer. After all 10, export the cards as tab-separated text (question TAB answer) so I can import them into Anki.
```

## Check the result

Every answer should be traceable to a sentence in the article — spot-check three. Cards that quote a number should quote it exactly. If the article was behind a "read more" fold, make sure Dassi expanded it; otherwise the cards only cover the first screen.

[Try another use case](/tutorials/)
