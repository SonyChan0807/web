require(utils)
library(stats)
library(mlbench)
# library("lattice", lib.loc="~/R/win-library/3.4")
library(lattice)
library(Cubist)

#輸入值為:2015 FORD FOCUS 19600 (共4位)以空格格開 / 為years.brand(大寫),model(大寫),里程數
argV <- commandArgs(TRUE)
anadata<-c(argV)
finaldata<-data.frame(years=c(anadata[1]),model=c(anadata[3]),mileage=c(anadata[4]))

#依品牌放位置 c(anadata[2])
#Type因類別太多 無法判斷
modelTree = readRDS(paste0('/home/ec2-user/web/final_project/Rmodel/',c(anadata[2]) ), refhook = FALSE)
mtPred <- predict(modelTree, finaldata)
print (mtPred[1])
