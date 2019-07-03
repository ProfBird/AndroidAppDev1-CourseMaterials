package edu.uoregon.piggamelab2;

import android.app.Activity;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.View.OnTouchListener;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.TextView.OnEditorActionListener;
import android.widget.Toast;

public class MainActivity extends Activity
	implements OnTouchListener, OnEditorActionListener {
	
	private SharedPreferences savedValues;	// used to persist activity state

	private Button rollDieButton, endTurnButton, newGameButton;
	private ImageView dieImageView;
	private TextView pointsTextView, nameTextView, score1TextView, score2TextView;
	private EditText player1EditText, player2EditText;
	
	boolean turnLocked = false;		// set to true when a player looses a turn

	private PigGame game = new PigGame();

	// rollDieButton click hander using an anonymous listener class
	OnClickListener rollButtonListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			displayDie(game.rollDie());
		}
	};

	// endTurnButton click hander using an anonymous listener class
	OnClickListener turnButtonListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			if(turnLocked)
			{
				// Start turn
				rollDieButton.setEnabled(true);
				endTurnButton.setText("End Turn");
				turnLocked = false;
                dieImageView.setVisibility(View.INVISIBLE);
			}
			else {
                // End turn
                game.changeTurn();
                displayCurrentPlayer();
                pointsTextView.setText("0");
                endTurnButton.setText("Start Turn");
                turnLocked = true;
                rollDieButton.setEnabled(false);
            }
		}
	};


	// endTurnButton click handler using an anonymous listener class
	OnClickListener newGameButtonListener = new OnClickListener() {
		@Override
		public void onClick(View v) {
			game.resetGame();
            turnLocked = true;
            endTurnButton.setEnabled(true);
            rollDieButton.setEnabled(false);
            endTurnButton.setText("Start turn");
            displayCurrentPlayer();
    	}
	};


	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		// Get a SharedPreferences object
		savedValues = getSharedPreferences("SavedValues", MODE_PRIVATE);
		
		rollDieButton = (Button)findViewById(R.id.rollDieButton);
		endTurnButton = (Button) findViewById(R.id.endTurnButton);
		newGameButton = (Button) findViewById(R.id.newGameButton);
		dieImageView = (ImageView) findViewById(R.id.dieImageView);
		pointsTextView = (TextView)findViewById(R.id.pointsTextView);
		player1EditText = (EditText)findViewById(R.id.player1EditText);
		player2EditText = (EditText)findViewById(R.id.player2EditText);
		nameTextView = (TextView)findViewById(R.id.nameTextView);
		score1TextView = (TextView)findViewById(R.id.score1TextView);
		score2TextView = (TextView)findViewById(R.id.score2TextView);
		
		rollDieButton.setOnClickListener(rollButtonListener);
		endTurnButton.setOnClickListener(turnButtonListener);
		newGameButton.setOnClickListener(newGameButtonListener);
		dieImageView.setOnTouchListener(this);
		player1EditText.setOnEditorActionListener(this);
		player2EditText.setOnEditorActionListener(this);
	}


	@Override
	public void onPause() {
		Editor editor = savedValues.edit();
		editor.putInt("player1Score", game.getPlayer1Score());
		editor.putInt("player2Score", game.getPlayer2Score());
		editor.putInt("turnPoints", game.getTurnPoints());
		editor.putInt("turn", game.getTurn());
		editor.commit();
		
		super.onPause();
	}


	@Override
	public void onResume() {
		super.onResume();
		
		int p1Score = savedValues.getInt("player1Score", 0);
		int p2Score = savedValues.getInt("player2Score", 0);
		int tPoints = savedValues.getInt("turnPoints", 0);
		int turn = savedValues.getInt("turn", 1);
		game = new PigGame(p1Score, p2Score, tPoints, turn);
		
		displayCurrentPlayer();
		pointsTextView.setText(Integer.toString(tPoints));
	}


	@Override
	public boolean onTouch(View v, MotionEvent event) {
		game.rollDie();
		return false;
	}


	private void displayDie(int side)
	{
		int id = 0;
		switch (side) {
		case 1: id = R.drawable.die1;
			break;
		case 2: id = R.drawable.die2;
			break;
		case 3: id = R.drawable.die3;
			break;
		case 4: id = R.drawable.die4;
			break;
		case 5: id = R.drawable.die5;
			break;
		case 6: id = R.drawable.die6;
			break;
		}
		dieImageView.setImageDrawable(getResources().getDrawable(id));
	dieImageView.setVisibility(View.VISIBLE);
	
		pointsTextView.setText(Integer.toString(game.getTurnPoints()));
		if(side == 1)	// If the player lost their turn
		{
			displayCurrentPlayer();
			rollDieButton.setEnabled(false);
			endTurnButton.setText("Start Turn");
			turnLocked = true;
		}
	}


	@Override
	public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        String playerName = "";
		if(actionId == EditorInfo.IME_ACTION_DONE || actionId == EditorInfo.IME_ACTION_UNSPECIFIED) {
            playerName = player1EditText.getText().toString();
            if (playerName != "")
                game.setPlayer1Name(playerName);

            playerName = player2EditText.getText().toString();
            if (playerName != "")
                game.setPlayer2Name(playerName);

            displayCurrentPlayer();
        }
		return false;
	}


	private void displayCurrentPlayer()
	{
        nameTextView.setText(String.format("%s's turn", game.getCurrentPalyer()));
			
		score1TextView.setText(Integer.toString(game.getPlayer1Score()));
		score2TextView.setText(Integer.toString(game.getPlayer2Score()));
		
		String winner = game.checkForWinner();
		if (winner != "") {
			Toast.makeText(this, winner, Toast.LENGTH_LONG).show();
            nameTextView.setText(winner);
			rollDieButton.setEnabled(false);
            endTurnButton.setEnabled(false);
		}
	}
}
