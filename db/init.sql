SELECT 'CREATE DATABASE library_DB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'library_DB')\gexec