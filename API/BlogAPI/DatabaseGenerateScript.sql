create database [BlogUI]
GO

USE [BlogUI]
GO

/****** Object: Table [dbo].[Table] Script Date: 09/10/1401 09:05:50 ب.ظ ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Posts] (
    [Id]          INT            NOT NULL IDENTITY,
    [Title]       NVARCHAR (100) NULL,
    [Text]        NTEXT          NULL,
    [CreatedDate] DATETIME2 (7)  NULL, 
    CONSTRAINT [PK_Posts] PRIMARY KEY ([Id])
);




