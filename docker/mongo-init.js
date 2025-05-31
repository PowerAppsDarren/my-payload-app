// MongoDB initialization script
db = db.getSiblingDB('payload-app');

// Create the payload-app database if it doesn't exist
db.createCollection('users');

print('MongoDB initialization completed for payload-app database');