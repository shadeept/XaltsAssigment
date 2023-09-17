#!/bin/bash

# Create the file test.txt if not already exists
if [ -f "test.txt" ]; 
then
> test.txt
else
touch test.txt
chmod +x test.txt
fi

# Generate and add 10 random numbers to test.txt
for ((i = 0; i < 10; i++)); do
  echo $((RANDOM % 10)) >> test.txt
done