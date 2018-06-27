package com.example.tidetablerelease;

import java.io.IOException;
import java.net.Proxy;

import org.apache.http.client.HttpResponseException;
import org.ksoap2.SoapEnvelope;
import org.ksoap2.SoapFault;
import org.ksoap2.serialization.PropertyInfo;
import org.ksoap2.serialization.SoapObject;
import org.ksoap2.serialization.SoapSerializationEnvelope;
import org.ksoap2.transport.HttpTransportSE;
import org.xmlpull.v1.XmlPullParserException;

import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class Main extends Activity {
	
	private TextView testView;
	final String NAMESPACE   = "http://opendap.co-ops.nos.noaa.gov/axis/webservices/highlowtidepred/wsdl";
	final String METHOD_NAME = "getHLPredAndMetadata";
	final String URL         = "http://opendap.co-ops.nos.noaa.gov/axis/services/highlowtidepred";
	final String SOAP_ACTION = URL + "/" + METHOD_NAME;
	
	//display result
	private String results = "";
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        //assign the text view it's object
        testView = (TextView) findViewById(R.id.testView);
        
        myTask newTask = new myTask();
        newTask.execute();
    }
    
    private class myTask extends AsyncTask<Void, Void, Void>{

		@Override
		protected Void doInBackground(Void... arg0) {
			SoapObject request = new SoapObject(NAMESPACE, METHOD_NAME);
					
			//add the properties required to our request
			request.addProperty("stationId", "9432780");
			request.addProperty("beginDate", "20150715 00:00");
			request.addProperty("endDate", "20150717 23:59");
			request.addProperty("datum", "MLLW");
			request.addProperty("unit", "0");
			request.addProperty("timeZone", "0");
			
			//create our envelope to get the data
			SoapSerializationEnvelope envelope = new SoapSerializationEnvelope(SoapEnvelope.VER11);
			envelope.dotNet = true;
			envelope.implicitTypes = true;
			envelope.setOutputSoapObject(request);

			
			//setup the http transport object
			HttpTransportSE transport = new HttpTransportSE(Proxy.NO_PROXY, URL, 60000);
			
			try {
				transport.call(SOAP_ACTION, envelope);
			} catch (org.ksoap2.transport.HttpResponseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (XmlPullParserException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
			//Successful object found
			if (envelope.bodyIn instanceof SoapObject) { // SoapObject = SUCCESS
			   SoapObject soapObject = (SoapObject) envelope.bodyIn;
			   parseResponse(soapObject);
			
			//Failure to find our soap object...
			} else if (envelope.bodyIn instanceof SoapFault) { // SoapFault = FAILURE
			   SoapFault soapFault = (SoapFault) envelope.bodyIn;
			   try {
				   throw new Exception(soapFault.getMessage());
			   }catch (Exception e) {
				   e.printStackTrace();
				}
			}

			return null;
		}
		
		public void parseResponse(SoapObject response){
			//Grab the result values from the successful response
			SoapObject result = (SoapObject) response.getProperty("HighLowValues");
			
			//if the result is not null... iterate the data for each item
			if (result != null){
				for(int i=0; i<result.getPropertyCount(); ++i){
					//Log.e("Index ", Integer.toString(i));
					SoapObject item = (SoapObject) result.getProperty(i);
					
					//grab the date attribute from our item
					String date = (String) item.getAttribute("date");
					
					//next we want the data for the current item
					SoapObject data = (SoapObject) item.getProperty("data");
					String time = data.getPrimitivePropertyAsString("time");
					String prediction = data.getPrimitivePropertyAsString("pred");
					String highLow = data.getPrimitivePropertyAsString("type");
					
					//display in our textview the results
					results += "Date: " + date + "\r\n\r\t" 
							+ "Time: " + time + "\r\n\r\t"
							+ "Prediction: " + prediction + "\r\n\r\t"
							+ "High/Low: " + highLow + "\r\n\r\n";
					
				}
			}
		}
		
		@Override
        protected void onPostExecute(Void result) {
            super.onPostExecute(result);
            testView.setText(results);
            
        }
 
        @Override
        protected void onPreExecute() {
            super.onPreExecute();       
        }
    	
    }
}