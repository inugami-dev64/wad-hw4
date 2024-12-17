CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,        -- Unique identifier for each user
    email VARCHAR(100) NOT NULL UNIQUE,       -- Email address, must be unique
    password VARCHAR(255) NOT NULL,      -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of user creation
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,        -- Unique identifier for each post
    user_id INT NOT NULL,                    -- Foreign key referencing the user who created the post
    body TEXT NOT NULL,                       -- Content of the post
    likes_count INT DEFAULT 0,                -- Counter for the number of likes on the post
    edited_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,              -- Last time the post was edited
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Timestamp of post creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Maintain referential integrity
);

-- Create a default admin user
INSERT INTO users (email, password) VALUES ('admin@example.org', 'Password123');

-- Insert some posts
INSERT INTO posts (user_id, body, likes_count) VALUES
    (1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 10),
    (1, 'Tartu is an interesting place', 13),
    (1, 'See pilt läheb väga kõvasti', 120),
    (1, 'Does anybody know where the lecture takes place?', 19),
    (1, 'The joke is that the place is called Sneed''s Feed & Seed which is clever in itself and quite funny to those with a mature sense of humour but what''s really just hilarious about it is that if you look closely at the front of this store, Sneed''s Feed & Seed, you can see a line that reads Formerly Chuck''s. Now, this might go over the average viewer''s head as this, THIS, is peak comedy. I doubt anything will ever be as funny as the joke about Sneed''s Feed & Seed. Are you ready for this one? So, like I said, the place is called Sneed''s Feed & Seed and this sign says Formerly Chuck''s, which means that when Chuck owned the place, well, I don''t have to tell you...', 34),
    (1, 'Example post', 34),
    (1, 'TestPost', 34),
    (1, 'What am I doing?', 34),
    (1, 'How is it even possible?', 34),
    (1, 'Please try to understand this code', 15);
