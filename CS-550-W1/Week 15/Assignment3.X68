*-----------------------------------------------------------
* Title      :Assembly Assignment 3
* Written by :Zixu Jiang
* Date       :12/01/2018
* Description:Read a text file
*-----------------------------------------------------------

    ORG    $1000
START:                  ; start program
    lea filename,a1
    move    #51,d0
    trap    #15
    move.l  #filesize,d2
    
    lea buffer,a1
    move    #53,d0
    trap    #15
    move    #5,d3
    
    convert_loop:       ; loop begin 
        tst.b   d3
        beq done
        sub.b   #$30,(a1)+
        sub.b   #1,d3
        bra convert_loop


* Put program code here
    done:
    SIMHALT             ; halt
    org $2000

* Put variables and constants here
filename    dc.b 'textfile.txt',0
buffer  ds.b    100
filesize    dc.b    100
    END    START        ; last line of source



*~Font name~Courier New~
*~Font size~10~
*~Tab type~1~
*~Tab size~4~
