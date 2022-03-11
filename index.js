import inquirer from "inquirer";
import questions from "./questions.js";
import _ from 'lodash';
import { rubric, welcome } from "./support.js";
import chalk from 'chalk';


const run = async (questions, inquirer, welcome, fn) => {

    welcome()
    console.log(chalk.bgBlueBright('Micro Quiz.'));


    let count = 0;
    const result = await inquirer.prompt(_.shuffle(questions))

    if (result.q1 == "intelligence, adaptability and loud, harsh caw.") { ++count }
    if (result.q2 == "Corvidae") { ++count }
    if (result.q3 == "basic tools") { ++count }
    if (result.q4 == "Apes and Dolphins") { ++count }
    if (result.q5 == "True") { ++count }
    if (result.q6 == "True") { ++count }
    if (result.q7 == "Murder") { ++count }
    if (result.q8 == "250") { ++count }

    const log = fn(count, questions.length)
    console.log(chalk.bgBlueBright('Thanks for taking my Crow Quiz!'));
    console.log(log)

}


run(questions, inquirer, welcome, rubric)
