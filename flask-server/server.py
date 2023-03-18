from flask import Flask, jsonify, request
from flask_cors import CORS
import xarray as xr

app = Flask(__name__)
CORS(app)

ds = xr.open_dataset('waves_2019-01-01.nc')

@app.route('/hmax', methods=['POST'])
def get_data():
    # Getting the coordinates of the selected point from the request
    lat = request.json['lat']
    lon = request.json['lon']

    # finding maximum wave height at the selected point
    point_data = ds.sel(latitude=lat, longitude=lon, method='nearest')
    hmax = point_data['hmax']
    max_wave_height = hmax.max().item()

    return jsonify({'max_wave_height': max_wave_height})
