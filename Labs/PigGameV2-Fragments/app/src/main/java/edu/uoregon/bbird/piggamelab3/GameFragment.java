package edu.uoregon.bbird.piggamelab3;

import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;

public class GameFragment extends Fragment 				
				implements OnClickListener {

	private Button newGameButton;
	private View rootView;
	
	private MainActivity mainActivity;
	private GameLogic game;
	private boolean isSinglePane = false;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		mainActivity = (MainActivity)getActivity();
		game = mainActivity.getGameLogic();
	}
		
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater.inflate(R.layout.fragment_game, container,
				false);
		
		// only the single-pane layout is inside a layout with id = container
		isSinglePane = mainActivity.findViewById(R.id.container) != null;
		
		newGameButton = (Button)rootView.findViewById(R.id.newGameButton);
		newGameButton.setOnClickListener(this);
		if (isSinglePane){
			// show the names of the players
			((TextView)rootView.findViewById(R.id.player1TextView)).setText(game.getPlayer1Name());
			((TextView)rootView.findViewById(R.id.player2TextView)).setText(game.getPlayer2Name());	
		}
		return rootView;
	}

	@Override
	public void onClick(View v) {
		if (isSinglePane) {		// the dual-pane layout doesn't need this, it already has the fragment
			getFragmentManager().beginTransaction()
			.replace(R.id.container, new MainFragment()).commit();
		}	
		else
		{
		// show the names of the players
			((TextView)mainActivity.findViewById(R.id.player1TextView)).setText(game.getPlayer1Name());
			((TextView)mainActivity.findViewById(R.id.player2TextView)).setText(game.getPlayer2Name());
		}
	}
}
