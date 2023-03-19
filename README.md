# Wave-Check - interactive map

> Live demo [_here_]().

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)


## General Information
 WaveCheck is a simple web app that allows users to inspect the maximum wave height for a specific location on a given day. App renders an interactive map with zoom controls using the Mapbox API. It is designed for customers who are interested in installing floating solar panels on bodies of water and need to ensure that the location is suitable for their needs.

## Technologies Used
Fronted
- React
- Typescript
- React-map-gl
- Mapbox
- Flowbite, TailwindCSS

Backend
- Phyton
- Flask
- netcdf file handle by xarray

## Usage
 - To use WaveCheck, simply click on the interactive map and the maximum wave height for that location will be displayed. The application only supports 2019-01-01 for now.

## Project Status
Project is: _in progress_ 

## Screenshot
![Alt text](https://i.ibb.co/QfFp2J3/Zrzut-ekranu-2023-03-19-o-17-42-53.png "screen")

## Setup

To run the app, follow these steps:
1. Clone the repository to your local machine.

2. Install the required dependencies by running
 # npm install 
 in the frontend directory (client) and 
 # pip install 
 in the backend directory (flask-server).

3. Start the backend server: export the FLASK_APP variable and invoke flask run in the backend directory.
# export FLASK_APP=server.py
# flask run
 
4. Start the frontend development server in the frontend directory by running
# npm start 

5. Open the application in your web browser by navigating to http://localhost:3000.

## Room for improvement
- supporting data since 1979 -> displaying max wave height since then
