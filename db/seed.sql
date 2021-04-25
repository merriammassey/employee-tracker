INSERT INTO department(name)
VALUES
  ('DevOps'),
  ('UX'),
  ('HR');

INSERT INTO role(title, salary, department_id)
VALUES
  ('Director', 120000, 1),
  ('Architect', 150000, 2),
  ('Manager', 100000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('Daniela', 'Ryf', 1, 1),
  ('Lionel', 'Sanders', 2, 2),
  ('Heather', 'Jackson', 3, 3);