import { reactive } from "vue";

export const store = reactive({

    active: 0,

    questions: [
        {
            domanda: 'Selezionare tutti gli studenti nati nel 1990',
            risposta: "SELECT * FROM `students` WHERE `date_of_birth` BETWEEN '1990-01-01' AND '1990-12-31';"
        },
        {
            domanda: 'Selezionare tutti i corsi che valgono più di 10 crediti',
            risposta: "SELECT * FROM `courses` WHERE `cfu` > 10;"
        },
        {
            domanda: 'Selezionare tutti gli studenti che hanno più di 30 anni ',
            risposta: "SELECT * FROM students WHERE TIMESTAMPDIFF(YEAR, `date_of_birth` , CURRENT_DATE()) >= 30;"
        },
        {
            domanda: 'Selezionare tutti i corsi del prime semestre del primo anno di un qualsiasi corso di laurea',
            risposta: "SELECT * FROM `courses` WHERE `period` = 'I semestre' AND `year` = 1;"
        },
        {
            domanda: 'Selezionare tutti gli appelli d’esame che avvengono nel pomeriggio ( dopo le 14 ) del 20/06/2020',
            risposta: "SELECT * FROM exams WHERE `date`='2020/06/20' AND `hour`>= '14:00:00';"
        },
        {
            domanda: 'Selezionare tutti i corsi di laurea magistrale',
            risposta: " SELECT * FROM `degrees` WHERE `level` = 'magistrale';"
        },
        {
            domanda: 'Da quanti dipartimenti è composta l’università?',
            risposta: "SELECT COUNT('id') FROM departments;"
        },
        {
            domanda: 'Quanti sono gli insegnanti che non hanno un numero di telefono?',
            risposta: "SELECT COUNT(`id`) FROM teachers WHERE `phone`IS NULL;"
        },
        {
            domanda: 'Contare quanti iscritti ci sono ogni anno',
            risposta: "SELECT YEAR(`enrolment_date`) AS 'ANNO', COUNT('id') AS 'NUOVI STUDENTI' FROM `students` GROUP BY YEAR(`enrolment_date`);"
        },
        {
            domanda: 'Contare gli insegnanti che hanno l’ufficio nello stesso edificio;',
            risposta: "SELECT `office_address` AS 'Indirizzo ufficio', COUNT('id') AS 'Numero di insegnanti' FROM `teachers` GROUP BY `office_address`;"
        },
        {
            domanda: 'Calcolare la media dei voti di ogni appello d’esame;',
            risposta: "SELECT AVG(`vote`) AS 'media', `exam_id` AS 'id esame' FROM `exam_student` GROUP BY `exam_id`;"
        },
        {
            domanda: 'Contare quanti corsi di laurea ci sono per ogni dipartimento;',
            risposta: "SELECT COUNT(`id`) AS 'numero di corsi', `department_id` AS 'ID dipartimento' FROM `degrees` GROUP BY `department_id`;"
        },
        {
            domanda: 'Selezionare tutti gli studenti iscritti al corso di laurea in economia;',
            risposta: "SELECT `students`.`name`,`students`.`surname`, `students`.`degree_id`, `degrees`.`name` FROM `degrees` INNER JOIN `students` ON `degrees`.`id` = `students`.`degree_id` WHERE `degrees`.`name` = 'corso di laurea in economia';"
        },
        {
            domanda: 'Selezionare tutti i corsi di laurea magistrale del dipartimento di neuroscienze;',
            risposta: "SELECT * FROM `departments` INNER JOIN `degrees` ON `departments`.`id` = `degrees`.`department_id` WHERE `departments`.`name`= 'Dipartimento di Neuroscienze' AND `degrees`.`level` = 'magistrale';"
        },
        {
            domanda: 'Selezionare tutti i corsi in cui insegna Fulvio amato(id=44);',
            risposta: "SELECT `courses`.`name` AS 'corso:', `teachers`.`name`, `teachers`.`surname` FROM `courses` INNER JOIN`course_teacher` ON`courses`.`id` = `course_teacher`.`course_id` INNER JOIN`teachers` ON`course_teacher`.`teacher_id` = `teachers`.`id` WHERE`teachers`.`id` = 44; "
        },
        {
            domanda: 'Selezionare tutti gli studenti con i dati relativi al corso di laurea a cui sono iscritti e il relativo dipartimento, in ordine alfabetico per cognome e nome;',
            risposta: "SELECT `students`.`id`, `students`.`surname`, `students`.`name`, `degrees`.`name`,`degrees`.`level`,`departments`.`name` FROM `students` INNER JOIN `degrees` ON `students`.`degree_id` = `degrees`.`id` INNER JOIN `departments` ON `degrees`.`department_id` = `departments`.`id` ORDER BY `students`.`surname` ASC;"
        },
        {
            domanda: 'Selezionare tutti i corsi di laurea con i relativi corsi e insegnanti;',
            risposta: "SELECT `degrees`.`name` AS 'Corso di Laurea' ,`courses`.`name` AS 'Materia',`teachers`.`name`,`teachers`.`surname` FROM `degrees` INNER JOIN `courses` ON `degrees`.`id`=`courses`.`degree_id` INNER JOIN `course_teacher` ON `courses`.`id`=`course_teacher`.`course_id` INNER JOIN `teachers` ON `course_teacher`.`teacher_id` = `teachers`.`id` ORDER BY degrees.name ASC;"
        },
        {
            domanda: 'Selezionare tutti i docenti che insegnano nel dipartimento di matematica (54)',
            risposta: "SELECT DISTINCT `teachers`.`name`,`teachers`.`surname` FROM `teachers` INNER JOIN `course_teacher` ON `teachers`.`id` = `course_teacher`.`teacher_id` INNER JOIN `courses` ON `course_teacher`.`course_id` = `courses`.`id` INNER JOIN `degrees` ON `courses`.`degree_id`= `degrees`.`id` INNER JOIN `departments` ON `degrees`.`department_id`=`departments`.`id` WHERE `departments`.`name`='Dipartimento di Matematica' ORDER BY `teachers`.`name` DESC;"
        },
    ]
})