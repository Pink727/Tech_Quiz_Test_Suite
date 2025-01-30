import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
import fs from 'fs';
import path from 'path';

// Resolve the directory path
const __dirname = path.resolve();
const questionDataPath = path.join(__dirname, './src/seeds/pythonQuestions.json');
const questionData = JSON.parse(fs.readFileSync(questionDataPath, 'utf8'));


try {
  await db();
  await cleanDB();

  // bulk create each model
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
