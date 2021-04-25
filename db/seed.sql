INSERT INTO department(name)
VALUES
  ('devops'),
  ('ux'),
  ('hr');

INSERT INTO role(title, salary, department_id)
VALUES
  ('director', 120000, 1),
  ('architect', 150000, 2),
  ('manager', 100000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('merriam', 'massey', 1, 1),
  ('matt', 'reines', 2, 2),
  ('maribel', 'ellison', 3, 3);