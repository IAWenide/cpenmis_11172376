-- CREATE SCHEMA StudentInformation;
-- CREATE TABLE StudentInformation.student_info (student_id INT PRIMARY KEY NOT NULL,
-- 											  student_lastname TEXT, student_firstname TEXT,
-- 											  student_email VARCHAR(100), 
-- 											  telephone_number VARCHAR(20) );	
-- INSERT INTO StudentInformation.student_info (student_id, student_lastname,
-- 											 student_firstname , student_email, 
-- 											 telephone_number)
-- VALUES (11172376, 'Wenide', 'Isaac', 'wisaac@st.ug.edu.gh', '+233 20 510 1356'),
-- 	   (11049492, 'Asare', 'Marvin', 'amarvin@st.ug.edu.gh', '+233 27 409 2234'),
-- 	   (11218951, 'Phill', 'Prince', 'pprince@st.ug.edu.gh', '+233 26 459 2164'),
-- 	   (11170350, 'Boadu', 'Nkansah', 'bnkansah@st.ug.edu.gh', '+233 55 169 8934'),
-- 	   (11285635, 'Ankrah', 'David', 'adavid@st.ug.edu.gh', '+233 50 223 4455');
-- CREATE TABLE StudentInformation.student_fees ( fees_id INT NOT NULL PRIMARY KEY,
-- 						    student_id INT NOT NULL,
-- 						    amount INT NOT NULL, balance TEXT, debit TEXT,
-- 						    FOREIGN KEY (student_id) REFERENCES StudentInformation.student_info(student_id));


-- CREATE SCHEMA courses;
-- CREATE TABLE courses.course (course_code VARCHAR(20) NOT NULL PRIMARY KEY, 
-- 					 course_name TEXT, credits INT);
-- INSERT INTO courses.course (course_code, course_name, credits)
-- VALUES ('CPEN 208', 'Software Engineering', 3),
-- 		('CBAS 210', 'Academic Writing II', 3),
-- 		('CPEN 206', 'Linear Circuit', 3),
-- 		('CPEN 212', 'Data Communication', 2),
-- 		('CPEN 204', 'Data Structures and Algorithms', 2);


-- CREATE SCHEMA lecturers;
-- CREATE TABLE lecturers.lecturer (lecturer_id INT NOT NULL PRIMARY KEY, lecturer_name TEXT, 
-- 								 lecturer_mail VARCHAR(30), lecturer_phonenumber VARCHAR(30));
-- INSERT INTO lecturers.lecturer (lecturer_id, lecturer_name, 
-- 								lecturer_mail, lecturer_phonenumber)
-- VALUES (11001, 'John Asiamah', 'jasiahmah@gmail.com', '+233 54 678 9012'),
-- 		(11021, 'Percy Okae', 'pokae@gmail.com', '+233 55 876 7890'),
-- 		(11045, 'Gideon Myles', 'gmyles@gmail.com', '+233 50 570 0000'),
-- 		(11222, 'Isaac Aboagye', 'iaboagye@gmail.com', '+233 20 146 1122'),
-- 		(11456, 'Magret Ankomah', 'mankomah@gmail.com', '+233 27 896 2578');

-- CREATE TABLE lecturers.lecturer_to_courses(id INT PRIMARY KEY, 
-- 										   lecturer_id INT, course_code VARCHAR(10),
-- 										  FOREIGN KEY (lecturer_id) REFERENCES lecturers.lecturer(lecturer_id),
-- 										  FOREIGN KEY (course_code) REFERENCES courses.course(course_code));
-- INSERT INTO lecturers.lecturer_to_courses(id, lecturer_id, course_code)
-- VALUES 	(1, 11001, 'CPEN 208' ),
-- 		(2, 11021, 'CBAS 210' ),
-- 		(3, 11045, 'CPEN 212' ),
-- 		(4, 11222, 'CPEN 206' ),
-- 		(5, 11456, 'CPEN 204' );

-- CREATE TABLE lecturers.lecturer_to_TA (TA_id INT PRIMARY KEY NOT NULL, TA_name TEXT, lecturer_id INT,
-- 									  FOREIGN KEY (lecturer_id) REFERENCES lecturers.lecturer(lecturer_id));
-- INSERT INTO lecturers.lecturer_to_TA (TA_id, TA_name, lecturer_id)
-- VALUES (101, 'Efo Anopansua', 11001),
-- 		(102, 'Hakeem Alhassan', 11222),
-- 		(103, 'Obed Appiah', 11021),
-- 		(104, 'Samed Abdul', 11045),
-- 		(105, 'Moses Gamah', 11456);

CREATE OR REPLACE FUNCTION calculate_outstanding_fees()
RETURNS JSON AS $$
DECLARE
    fee_record RECORD;
    student_record RECORD;
    outstanding_fees JSON := '[]'::JSON;
BEGIN
    FOR student_record IN SELECT * FROM StudentInformation.student_info LOOP
        SELECT INTO fee_record * FROM StudentInformation.student_fees WHERE student_id = student_record.student_id;
        
        IF fee_record IS NOT NULL THEN
            
            fee_record.balance := fee_record.amount::INT - fee_record.debit::INT;
            
            
            outstanding_fees := outstanding_fees || json_build_object(
                                    'student_id', student_record.student_id,
                                    'student_lastname', student_record.student_lastname,
                                    'student_firstname', student_record.student_firstname,
                                    'outstanding_fee', fee_record.balance
                                );
        END IF;
    END LOOP;
    
    RETURN outstanding_fees;
END;
$$ LANGUAGE plpgsql;
