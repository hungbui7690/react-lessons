/*
  NAMED VS DEFAULT EXPORT 

  > Default -> import ... from ''
  > Named -> import {...} from ''

  (***) we can also have default + named export in a file
*/

// (***) named + default export together
import Teacher, { promote, remote } from './teacher' // > our own module > relative path
import React, { Component } from 'react' // library > no path

const teacher = new Teacher('Joe', 'MS')
teacher.walk()
teacher.teach()
