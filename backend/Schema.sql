CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Unique identifier for each user
    email VARCHAR(100) NOT NULL UNIQUE,       -- Email address, must be unique
    password_hash VARCHAR(255) NOT NULL,      -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of user creation
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Unique identifier for each post
    user_id INT NOT NULL,                     -- Foreign key referencing the user who created the post
    body TEXT NOT NULL,                       -- Content of the post
    date DATE NOT NULL,                       -- Date of the post
    likes_count INT DEFAULT 0,                -- Counter for the number of likes on the post
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of post creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Maintain referential integrity
);