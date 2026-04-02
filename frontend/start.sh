#!/bin/bash
# Load environment variables from .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Start the Next.js server
exec npm run start
