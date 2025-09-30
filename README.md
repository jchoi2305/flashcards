# Web Development Project 2 - *Movie Trivia*

Submitted by: **Janet Choi**

This web app: **A movie trivia game set up in the form of flashcards. The goal is to guess the correct movie based on misleading/poor but valid descriptions of the movie.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] Added a counter for the number of cards guessed

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div>
    <a href="https://www.loom.com/share/bb3c805ee2654ef085c365d3e2469e39">/a>
    <a href="https://www.loom.com/share/bb3c805ee2654ef085c365d3e2469e39">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/bb3c805ee2654ef085c365d3e2469e39-f9ac6c99aeed242e-full-play.gif">
    </a>
</div>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I encountered a lot of challenges to getting the flip functionality to work; I struggled to visualize/understand how to connect what I knew about useState/states/hooks to make a conditional and change the 
content based on different states. 

## License

    Copyright [2025] [Janet Choi]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.