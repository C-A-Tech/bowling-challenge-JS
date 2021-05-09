# Bowling Challenge (in JavaScript)

The aim is to create a bowling score card in Javascript

## User Stories

```
As a player 

Each of my frames should have only 3 outcomes

Strike, Spare and Open
```

```
As a player

Every frame apart from the 10th frame can have up to two rolls
```

```
As a player

I get a Strike if I can knock down 10 pins in my first roll of the frame
```

```
As a player

If I dont get a Strike, I get a second roll
```

```
As a player

I get a Spare if my first and second roll = 10
```

```
As a player

I get an Open if my first and second roll < 10
```

```
As a player

I get a Double if I roll two Strikes in a row
```

```
As a player

If I get an Open 

My total score for that frame can be calculated immediately by adding the sum of the two rolls to the running total
```

```
As a player

If I get a Spare or a Strike 

My frame cannot be calculated immediately
```

```
As a player 

If I get a Spare

My total score for that frame is calculated later, by adding 10 to my running total and then adding the first roll of the next frame.
```

```
As a player

If I get a Strike

My score is calculated later by adding 10 to my running total and then adding the total of the next frame
```

```
As a player

If I get a Double

The first frame in the double is calculated by adding 20 points to my running total and the second frame is calculated like a strike.
```

```
As a player

If I roll more than 2 consecutive Strikes

Each frame before the penultimate and final frame, score 30 points.
```

```
As a player

The maximum I can score in a frame is 30 (By rolling 3 consecutive strikes)
```

```
As a player,

If I get a Strike in the first roll of the 10th frame, 

I get 2 more rolls (totalling 3 rolls in frame 10)
```

```
As a player

If I get a Spare in the first roll of the 10th frame 

I get 1 more roll (totalling 2 rolls in frame 10)
```


## The Perfect Game

```
As a player

The maximum I can score in a game is 300
```

```
As a player

To score the maximum 

I roll a Strike in each of the first nine frames and three Stikes in the tenth frame
```
