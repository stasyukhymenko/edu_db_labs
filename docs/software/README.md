# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- -----------------------------------------------------
-- Table `project_db`.`roles`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`roles` ;
CREATE TABLE IF NOT EXISTS `project_db`.`roles` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(45) NOT NULL UNIQUE,
    pricture MEDIUMBLOB NOT NULL,
    password BLOB NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    role VARCHAR(30) NOT NULL
);

-- -----------------------------------------------------
-- Table `project_db`.`projects`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects` ;
CREATE TABLE IF NOT EXISTS `project_db`.`projects` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL
);

-- -----------------------------------------------------
-- Table `project_db`.`tasks`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`tasks` ;
CREATE TABLE IF NOT EXISTS `project_db`.`tasks` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    developer VARCHAR(45) NOT NULL,
    status VARCHAR(20) NOT NULL,
    deadline DATETIME NOT NULL,
    projectId INT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES projects(id)
);

-- -----------------------------------------------------
-- Table `project_db`.`payments`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`payments` ;
CREATE TABLE IF NOT EXISTS `project_db`.`payments` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cardNumber int NOT NULL,
    cardCVV int NOT NULL,
    cardExpireDate DATETIME NOT NULL,
    email VARCHAR(50) NOT NULL,
    projectId INT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES projects(id)
);

-- -----------------------------------------------------
-- Table `project_db`.`reviews`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`reviews` ;
CREATE TABLE IF NOT EXISTS `project_db`.`reviews` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(100) NOT NULL,
    rate int NOT NULL,
    projectId INT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES projects(id)
);

-- -----------------------------------------------------
-- Table `project_db`.`roles`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`roles` ;
CREATE TABLE IF NOT EXISTS `project_db`.`roles` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE
);

-- -----------------------------------------------------
-- Table `project_db`.`members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`members` ;
CREATE TABLE IF NOT EXISTS `project_db`.`members` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    roleId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (roleId) REFERENCES roles(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- -----------------------------------------------------
-- Table `project_db`.`projects_members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects_members` ;
CREATE TABLE IF NOT EXISTS `project_db`.`projects_members` (
    memberId INT NOT NULL,
    projectId INT NOT NULL,
    FOREIGN KEY (memberId) REFERENCES members(id),
    FOREIGN KEY (projectId) REFERENCES projects(id)
);

-- -----------------------------------------------------
-- Table `project_db`.`role_grant`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`role_grant` ;
CREATE TABLE IF NOT EXISTS `project_db`.`role_grant` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    roleId INT NOT NULL,
    permissionId INT NOT NULL,
    FOREIGN KEY (roleId) REFERENCES roles(id),
    FOREIGN KEY (permissionId) REFERENCES permissions(id)
);

```

- RESTfull сервіс для управління даними

