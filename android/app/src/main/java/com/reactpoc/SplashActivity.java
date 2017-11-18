package com.reactpoc;

import android.support.v7.app.AppCompatActivity;
import com.reactpoc.R;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash);

        initViews();
    }

    void initViews(){
        new Handler().postDelayed(new Runnable(){
            @Override
            public void run() {
                /* Create an Intent that will start the MainActivity. */
                Intent mainIntent = new Intent(Splash.this,MainActivity.class);
                startActivity(mainIntent);
            }
        }, 3000);
    }
}
