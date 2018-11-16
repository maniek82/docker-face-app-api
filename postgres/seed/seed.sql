BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('bolek','bolek@gmail.com',3,'2018-05-15');
INSERT into login (hash, email) values ('$2y$12$j.K25ufR2V6ERPTw6UsS1utGictd864m.QIdGbBRzY74L/YWNY16a
','bolek@gmail.com');

COMMIT;