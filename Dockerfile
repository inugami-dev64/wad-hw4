FROM node:23.4.0-alpine3.20 AS frontend_builder

# Copy and build frontend
COPY ./frontend /app/frontend

WORKDIR /app/frontend

# Install dependencies
RUN npm install

# Build frontend files
RUN npm run build

FROM node:23.4.0-alpine3.20 AS hw4

RUN apk add supervisor nginx

COPY ./backend /app/hw4
COPY --from=frontend_builder /app/frontend/dist /app/static
COPY ./config/entrypoint.sh /usr/bin/entrypoint.sh

RUN chmod 755 /usr/bin/entrypoint.sh

WORKDIR /app/hw4

# Install backend dependencies
RUN npm install

ENTRYPOINT [ "sh", "/usr/bin/entrypoint.sh" ]