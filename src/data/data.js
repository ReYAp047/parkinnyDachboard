import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRef, useState, useEffect } from 'react';
import { db } from '../Core/Config';

Object.defineProperty(exports, '__esModule', { value: true });
// line

async function janData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 1));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function febData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 2));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function marData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 3));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function AprData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 4));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function mayData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 5));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function junData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 6));
  const querySnapshot = await getDocs(q);
  console.log(parseInt(querySnapshot.size, 8));
  return (querySnapshot.size);
}

async function julData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 7));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function augData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 8));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function sepData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 9));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function octData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 10));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function novData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 11));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

async function decData() {
  const q = query(collection(db, 'Reservation'), where('Month', '==', 12));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.size);
  return (querySnapshot.size);
}

export const chiffreData = [
  { month: 'Jan', chiffre: 1 }, { month: 'Feb', chiffre: 1 },
  { month: 'Mar', chiffre: 1 }, { month: 'Apr', chiffre: 1 },
  { month: 'May', chiffre: 1 }, { month: 'Jun', chiffre: 6 },
  { month: 'Jul', chiffre: 1 }, { month: 'Aug', chiffre: 1 },
  { month: 'Sep', chiffre: 1 }, { month: 'Oct', chiffre: 1 },
  { month: 'Nov', chiffre: 1 }, { month: 'Dec', chiffre: 1 },
];

// Pie
export const sampleData = [
  { name: 'Parking1', value: 35, text: '37%' }, { name: 'Parking4', value: 25, text: '4%' },
  { name: 'Parking2', value: 34, text: '17%' }, { name: 'Parking5', value: 35, text: '11%' },
  { name: 'Parking3', value: 30, text: '19%' }, { name: 'Parking6', value: 37, text: '12%' },
];

// TotalEntrer
export const TotalEntrerData = [
  [
    { x: 'Periode-1', y: 500 },
    { x: 'Periode-2', y: 200 },
    { x: 'Periode-3', y: 400 },
    { x: 'Periode-4', y: 600 },
    { x: 'Periode-5', y: 200 },
    { x: 'Periode-6', y: 250 },
    { x: 'Periode-7', y: 500 },
    { x: 'Periode-8', y: 500 },
  ],
  ['#FFFF99'],
];

// Ocupation
export const ocupationData = [
  { month: 'Jan', chiffre: 35 }, { month: 'Feb', chiffre: 25 },
  { month: 'Mar', chiffre: 34 }, { month: 'Apr', chiffre: 35 },
  { month: 'May', chiffre: 30 }, { month: 'Jun', chiffre: 37 },
  { month: 'Jul', chiffre: 55 }, { month: 'Aug', chiffre: 45 },
  { month: 'Sep', chiffre: 45 }, { month: 'Oct', chiffre: 45 },
  { month: 'Nov', chiffre: 31 }, { month: 'Dec', chiffre: 30 },
];
