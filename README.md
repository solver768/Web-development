#include<stdio.h>
void insertion (int);
void deletion () ;
void display() ;
int a[20], n=0;
void main() 
{
  int ch, x;
  printf("\nenter choice ") ;
  while(1) 
  {
    printf(" 1 2 3 4") ;
    scanf("%d", &ch) ;
    switch(ch) 
    {
      case 1:
         printf("value:) ;
         scanf("%d", &x) ;
         insertion (x) ;
         break;
     case 2:
         deletion () ;
         break;
     case 3:
          display() ;
          break;
      case 4:
          exit(0) ;
      default:
         printf("\n invalid ") ;
    }
  }
}
void insertion (int ele) 
{
   int i,x,t;
   
  
