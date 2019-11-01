/* this file contains the actual definitions of */
/* the IIDs and CLSIDs */

/* link this file in with the server and any clients */


/* File created by MIDL compiler version 5.01.0164 */
/* at Wed Feb 10 15:19:36 1999
 */
/* Compiler settings for dictionary.idl:
    Os (OptLev=s), W1, Zp8, env=Win32, ms_ext, c_ext
    error checks: allocation ref bounds_check enum stub_data 
*/
//@@MIDL_FILE_HEADING(  )
#ifdef __cplusplus
extern "C"{
#endif 


#ifndef __IID_DEFINED__
#define __IID_DEFINED__

typedef struct _IID
{
    unsigned long x;
    unsigned short s1;
    unsigned short s2;
    unsigned char  c[8];
} IID;

#endif // __IID_DEFINED__

#ifndef CLSID_DEFINED
#define CLSID_DEFINED
typedef IID CLSID;
#endif // CLSID_DEFINED

const IID IID_IDictionary = {0x54BF6568,0x1007,0x11D1,{0xB0,0xAA,0x44,0x45,0x53,0x54,0x00,0x00}};


const IID IID_ISpellCheck = {0x54BF6569,0x1007,0x11D1,{0xB0,0xAA,0x44,0x45,0x53,0x54,0x00,0x00}};


#ifdef __cplusplus
}
#endif

