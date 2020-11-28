import numpy as np
import pandas as pd

# # n array, length of data (first arg) must be the same length as the length of index (second arg)
# s = pd.Series(np.random.randn(5), index=['a','b','c','d','e'])
# print(s)

# # Dict now.
# d = { 'a': 0, 'b': 1, 'c': 2 }
# # print(pd.Series(d))
# # maps the keys as the indices, the values as the data.
# print(pd.Series(d, index=["b", "c", "d", "a"]))
# # Takes the key-value pairs in the initial arg of data, will try to map the keys with corresponding
# # values of the index. Since, for example, index specifies there is a d element, but there is not
# # a d-value pair in the dictionary, it is represented as NaN

# # Data Frames:
# # 2 dimensional labeled structure with columns of different types. Good way of representing excel
# # sheets.

# # Initializing data frame as dict of series
# d = {'one': pd.Series([1.0,2.0,3.0], index=['a', 'b', 'c']),
#      'two': pd.Series([1.0,2.0,3.0,4.0], index=['a','b','c','d'])}

# df = pd.DataFrame(d)
# print(df)
# # key of dict: the column name
# # value: corresponding to row/column
# # index: rows

df = pd.read_csv("./MOCK_DATA.csv")
print(df)

# https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.core.resample.Resampler.interpolate.html?highlight=interpolate#pandas.core.resample.Resampler.interpolate
