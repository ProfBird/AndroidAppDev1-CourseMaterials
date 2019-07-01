package edu.uoregon.bbird.piggamelab3;

import android.app.Fragment;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.TextView.OnEditorActionListener;

public class MainFragment extends Fragment 
				implements OnClickListener, OnEditorActionListener {

	private Button startButton;
	private EditText player1EditText;
	private EditText player2EditText;
	
	private View rootView;
	private MainActivity mainActivity;
	private GameLogic game;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		mainActivity = (MainActivity)getActivity();
		game = mainActivity.getGameLogic();
		
		setHasOptionsMenu(true);
	}
	
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
												Bundle savedInstanceState) {
		rootView = inflater.inflate(R.layout.fragment_main, container,
		false);
		
		startButton = (Button)rootView.findViewById(R.id.startGameButton);
		startButton.setOnClickListener(this);
		player1EditText = (EditText)rootView.findViewById(R.id.player1EditText);
		player1EditText.setOnEditorActionListener(this);
		player2EditText = (EditText)rootView.findViewById(R.id.player2EditText);
		player2EditText.setOnEditorActionListener(this);
		
		return rootView;
	}

	@Override
	public void onClick(View v) {
		if (mainActivity.findViewById(R.id.container) != null) {
			getFragmentManager().beginTransaction()
			.replace(R.id.container, new GameFragment()).commit();
		}	
	}

	@Override
	public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
		if(actionId == EditorInfo.IME_ACTION_DONE ||
				actionId == EditorInfo.IME_ACTION_UNSPECIFIED) {
			if(v.getId() == R.id.player1EditText)
				game.setPlayer1Name(((EditText)mainActivity.findViewById(R.id.player1EditText)).getText().toString());
			else
				game.setPlayer2Name(((EditText)mainActivity.findViewById(R.id.player2EditText)).getText().toString());
		}
		return false;
	}
}