# Reading + writing to files
import pandas as pd

# notice how nice this is...
titanic = pd.read_csv("titanic.csv")

# If we print it out, that's a lot of information. how do we process
# only a part of the data?
print(titanic.head(8))
# Start from the head, print out first 8. As the name implies, if we want
# the last 8, we can do .tail(8).
print(titanic.tail(8))

# What are the data types of the columns?
print(titanic.dtypes)