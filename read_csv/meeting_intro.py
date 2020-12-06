# 1
import pandas as pd
df = pd.DataFrame({
    "Name": ["Braund, Mr. Owen Harris",
             "Allen, Mr. William Henry",
             "Bonnell, Miss. Elizabeth"],
    "Age": [22,35,58],
    "Sex":["male","male","female"]
})
print(df)

# Will store the data with three columns, Name, Age, and Sex
# The 3 rows of names will be Braund, Allen, and Bonnell
# The same applies for the age: 22 applies for the first row, etc...

# That is a data frame, each column is a series.

# 2 Accessing just Age
# Indexing like an array.
print(df['Age'])
