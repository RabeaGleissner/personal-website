---
date: "2021-03-26"
title: "Looping over tests with Jest"
path: "/til/looping-over-tests-with-jest"
tags: ["til"]
---

When you want to test some simple and repetitive logic, it makes sense to loop over the input and output data and run the test for each.

## A verbose example

Let's imagine we're writing tests for a function that returns the sound that an animal makes.
We could write lots of little tests for each animal and its corresponding sound.

```js
    it('returns sound for dog', () => {
      const sound = letAnimalSpeak('dog');
      expect(sound).toEqual('bark');
    });

    it('returns sound for cat', () => {
      const sound = letAnimalSpeak('cat');
      expect(sound).toEqual('meow');
    });

    it('returns sound for horse', () => {
      const sound = letAnimalSpeak('horse');
      expect(sound).toEqual('neigh');
    });

    // and many more
 ```

If we have a long list of animals this can soon get very repetitive and boring.

## A less verbose example

Instead we can create an array of animals with their sounds and iterate over that.
Then we run the test for each.

```js
    const speakingAnimals = [
      ['dog', 'bark'],
      ['cat', 'meow'],
      ['horse', 'neigh'],
      ['bird', 'sing'],
      ['rooster', 'cock-a-doodle-do'],
    ];
    for (const animal of speakingAnimals) {
      it(`returns sound for animal: ${speakingAnimals[0]}`, () => {
        const sound = letAnimalSpeak(speakingAnimals[0]);
        expect(sound).toEqual(speakingAnimals[1]);
      });
    }
  });
 ```

That's much better!
If we have a bug and one of the animals makes the wrong noise, we can still find the failing test easily, because the test description prints out each type of the animal.

### Even easier to read with Jest

And now we're coming to the TIL bit of this article.
Today I learnt that Jest has a feature which makes a test like that even easier to read!

Here's the previous example refactored using Jest's `test.each` with a table.

```js
    test.each`
      animal       | sound 
      ${'dog'}     | ${'bark'}
      ${'cat'}     | ${'meow'}
      ${'horse'}   | ${'neigh'}
      ${'bird'}    | ${'sing'}
      ${'rooster'} | ${'cock-a-doodle-do'}
    `('returns $sound when animal is $animal', ({ animal, sound }) => {
       const sound = letAnimalSpeak(animal);
       expect(sound).toEqual(sound);
    });
```

[Jest docs for this](https://jestjs.io/docs/api#testeachtablename-fn-timeout)
