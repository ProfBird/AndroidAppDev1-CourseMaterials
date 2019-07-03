package edu.uoregon.bbird.piggamelab3;

import java.util.Random;

public class GameLogic {
final private int winningScore = 100;
	
	private Random rand = new Random();
	private int player1Score;
	private int player2Score;
	private int turnPoints;
	private String player1Name = "";
	private String player2Name = "";
	private int turn;
	
	public GameLogic()
	{
		player1Score = 0;
		player2Score = 0;
		turnPoints = 0;
		turn = 1; // player 1 goes first
	}
	
	public GameLogic(int p1Score, int p2Score, int tPoints, int t)
	{
		player1Score = p1Score;
		player2Score = p2Score;
		turnPoints = tPoints;
		turn = t;
	}
	
	public void setPlayer1Name(String n)
	{
		player1Name = n;
	}
	
	public String getPlayer1Name()
	{
		return player1Name;
	}
	
	public void setPlayer2Name(String n)
	{
		player2Name = n;
	}
	
	public String getPlayer2Name()
	{
		return player2Name;
	}
	
	public int getTurn() {
		return turn;
	}
	
	public int getPlayer1Score()
	{
		return player1Score;
	}

	
	public int getPlayer2Score()
	{
		return player2Score;
	}
	
	public void resetGame()
	{
		player1Score = 0;
		player2Score = 0;
		turnPoints = 0;
		turn = 1;
	}

	public int rollDie()
	{
		int roll = rand.nextInt(6) + 1;
		
		if(roll != 1)
		{
			turnPoints += roll;
		}
		else
		{
			turnPoints = 0;
			changeTurn();
		}
		
		return roll;
	}
	
	public int getTurnPoints()
	{
		return turnPoints;
	}

	public String getCurrentPalyer()
	{
		if(turn == 1)
			return player1Name;
		else
			return player2Name;
	}
	
	public int changeTurn()
	{
		if(turn == 1)
			player1Score += turnPoints;
		else
			player2Score += turnPoints;
		
		turnPoints = 0;
		
		turn = turn % 2 + 1;
		return turn;
	}
	
	public String checkForWinner()
	{
		if (player1Score >= winningScore)
			return player1Name;
		
		if (player2Score >= winningScore)
			return player2Name;
		
		return "";
	}
}
