import pandas as pd
import numpy as np
import os

df = pd.read_csv("asylum_seekers.csv")
ret = df["Origin"].values
f = open("dropdown.txt", "a")

def remove_repeating(list):
    output = []
    s = set()
    for country in list:
        if country not in s:
            s.add(country)
            output.append(country)

    return output

for country in remove_repeating(ret):
    f.write(country + "\n")
