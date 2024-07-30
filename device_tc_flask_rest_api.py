# app.py
import pandas as pd
from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes
api = Api(app)

# Sample data
data = pd.read_csv(r"C:\Users\pradhana\Downloads\system_details.csv")


# Define the API model
system_model = api.model('System', {
    'Id': fields.String(required=True, description='The System identifier'),
    'Group': fields.String(required=True, description='The System identifier Group'),
    'Program': fields.String(required=False, description='The Program'),
    'Processor': fields.String(required=True, description='The Processor'),
    'IPv4 Address': fields.String(required=False, description='The System IPV4 Address'),
    'CPU Count': fields.String(required=False, description='The CPU Count'),
    'CPU cores': fields.String(required=False, description='The CPU Core'),
    'Dimm Count': fields.String(required=False, description='The DIMM Count'),
    'RAM vendor': fields.String(required=False, description='The RAM vendor'),
    'RAM size_gib': fields.String(required=False, description='The RAM size_gib'),
    'RAM speed_mts': fields.String(required=False, description='The RAM speed'),
    'RAM card_raw': fields.String(required=False, description='The RAM Raw card'),
    'PCI vendor': fields.String(required=False, description='The PCI vendor'),
    'PCI device': fields.String(required=False, description='The RAM device'),
    'CPU qdf': fields.String(required=False, description='The CPU QDF')
})

@api.route('/systems')
class Users(Resource):
    @api.doc(params={
        'group': 'Filter by groupname',
        'id': 'Filter by system id',
        'qdf': 'Filter by system cpu qdf',
        'dimms': 'Filter by system dimms'

    })
    @api.marshal_list_with(system_model)
    def get(self):
        # Retrieve query parameters for filtering
        group = request.args.get('group')
        system_id = request.args.get('id')
        cpu_qdf = request.args.get('qdf')
        dimms_count = request.args.get('dimms')
        dimms_vendor = request.args.get('dimms_vendor')

        filtered_data = data
        if group:
            print(group)
            filtered_data = filtered_data[filtered_data["Group"].str.contains(group,case=False,na=False)]
            print(filtered_data)
        if system_id:
            print("I am in id")
            filtered_data = filtered_data[filtered_data["Id"].str.contains(system_id,case=False,na=False)]
        if cpu_qdf:
            print("I am in qdf")
            filtered_data = filtered_data[filtered_data["CPU qdf"].str.contains(cpu_qdf,case=False,na=False)]
        if dimms_count:
            print("I am in Dimm Count","dimms_count" , dimms_count , type(dimms_count))
            filtered_data = filtered_data[filtered_data["Dimm Count"] == int(dimms_count)]
        if dimms_vendor:
            print("I am in dimms_vendor")
            filtered_data = filtered_data[filtered_data["RAM vendor"].str.contains(dimms_vendor,case=False,na=False)]

        #return filtered_data.to_json(orient='records')
        return filtered_data.to_dict(orient='records')

if __name__ == '__main__':
    app.run(debug=True)
	#df = df[df["Group"].str.contains("regression",case=False,na=False)]
	#print(df)
