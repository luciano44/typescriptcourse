// Utility Types

// Partial

interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: "compsi101",
  title: "final project",
  grade: 0,
}

// console.log(
//   updateAssignment(assign1, {
//     grade: 95,
//   })
// )
const assignGraded: Assignment = updateAssignment(assign1, {
  grade: 95,
})

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to db
  return assign
}

const assignVerified: Readonly<Assignment> = recordAssignment({
  ...assignGraded,
  verified: true,
})

// Readonly object can't have its properties being reassigned
// assignVerified.grade = 24

recordAssignment({ ...assignGraded, verified: true })

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "0000FF",
  blue: "00FF00",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
}

interface Grades {
  asasign1: number
  asasign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: {
    asasign1: 74,
    asasign2: 68,
  },
  Kelly: {
    asasign1: 24,
    asasign2: 15,
  },
}
