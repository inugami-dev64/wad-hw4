FROM node:23.4.0-alpine3.20 AS frontend_builder

# Copy and build frontend
COPY ./frontend /app/frontend

WORKDIR /app/frontend

ENV VUE_APP_BACKEND_HOST=http://localhost:9999

# Install dependencies
RUN npm install

# Build frontend files
RUN npm run build

FROM node:23.4.0-alpine3.20 AS hw4

RUN apk --no-cache add supervisor nginx --virtual build-deps build-base python3

COPY ./backend /app/hw4
COPY --from=frontend_builder /app/frontend/dist /app/static
COPY ./config/entrypoint.sh /usr/bin/entrypoint.sh

RUN chmod 755 /usr/bin/entrypoint.sh

WORKDIR /app/hw4

# Install backend dependencies
RUN npm install

# Force recompile bcrypt from source
RUN npm rebuild bcrypt --build-from-source

ENTRYPOINT [ "sh", "/usr/bin/entrypoint.sh" ]