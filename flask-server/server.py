from flask import Flask, jsonify, request
from flask_cors import CORS
import xarray as xr
import numpy as np

app = Flask(__name__)
CORS(app)

ds = xr.open_dataset('waves_2019-01-01.nc')

