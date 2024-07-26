import pandas as pd
from flask import Flask, render_template,jsonify
from flask_cors import CORS



app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route("/app/data/")
def index_page():
	df = pd.read_csv(r"C:\Users\pradhana\Downloads\2024_7_5_11_19_33_full_details.csv")
	#return render_template('device_tc_mapping.html', tables=[df.to_html(classes='data')], titles=df.columns.values)
	#return jsonify(df.to_dict(orient='records'))
	return df.to_json(orient='records') 



if __name__=="__main__":
	
    app.run()
