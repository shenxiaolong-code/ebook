/* this ALWAYS GENERATED file contains the proxy stub code */


/* File created by MIDL compiler version 5.01.0164 */
/* at Wed Feb 10 15:19:36 1999
 */
/* Compiler settings for dictionary.idl:
    Os (OptLev=s), W1, Zp8, env=Win32, ms_ext, c_ext
    error checks: allocation ref bounds_check enum stub_data 
*/
//@@MIDL_FILE_HEADING(  )


/* verify that the <rpcproxy.h> version is high enough to compile this file*/
#ifndef __REDQ_RPCPROXY_H_VERSION__
#define __REQUIRED_RPCPROXY_H_VERSION__ 440
#endif


#include "rpcproxy.h"
#ifndef __RPCPROXY_H_VERSION__
#error this stub requires an updated version of <rpcproxy.h>
#endif // __RPCPROXY_H_VERSION__


#include "dictionary.h"

#define TYPE_FORMAT_STRING_SIZE   13                                
#define PROC_FORMAT_STRING_SIZE   29                                

typedef struct _MIDL_TYPE_FORMAT_STRING
    {
    short          Pad;
    unsigned char  Format[ TYPE_FORMAT_STRING_SIZE ];
    } MIDL_TYPE_FORMAT_STRING;

typedef struct _MIDL_PROC_FORMAT_STRING
    {
    short          Pad;
    unsigned char  Format[ PROC_FORMAT_STRING_SIZE ];
    } MIDL_PROC_FORMAT_STRING;


extern const MIDL_TYPE_FORMAT_STRING __MIDL_TypeFormatString;
extern const MIDL_PROC_FORMAT_STRING __MIDL_ProcFormatString;


/* Object interface: IUnknown, ver. 0.0,
   GUID={0x00000000,0x0000,0x0000,{0xC0,0x00,0x00,0x00,0x00,0x00,0x00,0x46}} */


/* Object interface: IDictionary, ver. 0.0,
   GUID={0x54BF6568,0x1007,0x11D1,{0xB0,0xAA,0x44,0x45,0x53,0x54,0x00,0x00}} */


extern const MIDL_STUB_DESC Object_StubDesc;


#pragma code_seg(".orpc")

HRESULT STDMETHODCALLTYPE IDictionary_Initialize_Proxy( 
    IDictionary __RPC_FAR * This)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      3);
        
        
        
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 0U;
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[0] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_Initialize_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    RpcTryFinally
        {
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> Initialize((IDictionary *) ((CStdStubBuffer *)This)->pvServerObject);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_LoadLibrary_Proxy( 
    IDictionary __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pFilename)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      4);
        
        
        
        if(!pFilename)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pFilename,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pFilename,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_LoadLibrary_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pFilename;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pFilename = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pFilename,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> LoadLibrary((IDictionary *) ((CStdStubBuffer *)This)->pvServerObject,pFilename);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        _StubMsg.BufferLength += 16;
        
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_InsertWord_Proxy( 
    IDictionary __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pWord,
    /* [string][in] */ WCHAR __RPC_FAR *pWordUsingOtherLang)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      5);
        
        
        
        if(!pWord)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        if(!pWordUsingOtherLang)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U + 14U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pWord,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pWordUsingOtherLang,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pWord,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pWordUsingOtherLang,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[8] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_InsertWord_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pWord;
    WCHAR __RPC_FAR *pWordUsingOtherLang;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pWord = 0;
    ( WCHAR __RPC_FAR * )pWordUsingOtherLang = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[8] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pWord,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pWordUsingOtherLang,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> InsertWord(
              (IDictionary *) ((CStdStubBuffer *)This)->pvServerObject,
              pWord,
              pWordUsingOtherLang);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        _StubMsg.BufferLength += 16;
        
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_DeleteWord_Proxy( 
    IDictionary __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pWord)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      6);
        
        
        
        if(!pWord)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pWord,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pWord,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_DeleteWord_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pWord;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pWord = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pWord,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> DeleteWord((IDictionary *) ((CStdStubBuffer *)This)->pvServerObject,pWord);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        _StubMsg.BufferLength += 16;
        
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_LookupWord_Proxy( 
    IDictionary __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pWord,
    /* [out] */ WCHAR __RPC_FAR pWordOut[ 32 ])
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    if(pWordOut)
        {
        MIDL_memset(
               pWordOut,
               0,
               sizeof( WCHAR [ 32 ] ));
        }
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      7);
        
        
        
        if(!pWord)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pWord,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pWord,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[18] );
            
            NdrFixedArrayUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                     (unsigned char __RPC_FAR * __RPC_FAR *)&pWordOut,
                                     (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[6],
                                     (unsigned char)0 );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        NdrClearOutParameters(
                         ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                         ( PFORMAT_STRING  )&__MIDL_TypeFormatString.Format[6],
                         ( void __RPC_FAR * )pWordOut);
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_LookupWord_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    WCHAR _AM10[ 32 ];
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pWord;
    WCHAR ( __RPC_FAR *pWordOut )[ 32 ];
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pWord = 0;
    pWordOut = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[18] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pWord,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        pWordOut = &_AM10;
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> LookupWord(
              (IDictionary *) ((CStdStubBuffer *)This)->pvServerObject,
              pWord,
              *pWordOut);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 64U + 10U;
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        NdrFixedArrayMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                               (unsigned char __RPC_FAR *)*pWordOut,
                               (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[6] );
        
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_RestoreLibrary_Proxy( 
    IDictionary __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pFilename)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      8);
        
        
        
        if(!pFilename)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pFilename,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pFilename,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_RestoreLibrary_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pFilename;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pFilename = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[2] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pFilename,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> RestoreLibrary((IDictionary *) ((CStdStubBuffer *)This)->pvServerObject,pFilename);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        _StubMsg.BufferLength += 16;
        
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


HRESULT STDMETHODCALLTYPE IDictionary_FreeLibrary_Proxy( 
    IDictionary __RPC_FAR * This)
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      9);
        
        
        
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 0U;
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[0] );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB IDictionary_FreeLibrary_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    RpcTryFinally
        {
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((IDictionary*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> FreeLibrary((IDictionary *) ((CStdStubBuffer *)This)->pvServerObject);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 4U;
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}

const CINTERFACE_PROXY_VTABLE(10) _IDictionaryProxyVtbl = 
{
    &IID_IDictionary,
    IUnknown_QueryInterface_Proxy,
    IUnknown_AddRef_Proxy,
    IUnknown_Release_Proxy ,
    IDictionary_Initialize_Proxy ,
    IDictionary_LoadLibrary_Proxy ,
    IDictionary_InsertWord_Proxy ,
    IDictionary_DeleteWord_Proxy ,
    IDictionary_LookupWord_Proxy ,
    IDictionary_RestoreLibrary_Proxy ,
    IDictionary_FreeLibrary_Proxy
};


static const PRPC_STUB_FUNCTION IDictionary_table[] =
{
    IDictionary_Initialize_Stub,
    IDictionary_LoadLibrary_Stub,
    IDictionary_InsertWord_Stub,
    IDictionary_DeleteWord_Stub,
    IDictionary_LookupWord_Stub,
    IDictionary_RestoreLibrary_Stub,
    IDictionary_FreeLibrary_Stub
};

const CInterfaceStubVtbl _IDictionaryStubVtbl =
{
    &IID_IDictionary,
    0,
    10,
    &IDictionary_table[-3],
    CStdStubBuffer_METHODS
};


/* Object interface: ISpellCheck, ver. 0.0,
   GUID={0x54BF6569,0x1007,0x11D1,{0xB0,0xAA,0x44,0x45,0x53,0x54,0x00,0x00}} */


extern const MIDL_STUB_DESC Object_StubDesc;


#pragma code_seg(".orpc")

HRESULT STDMETHODCALLTYPE ISpellCheck_CheckWord_Proxy( 
    ISpellCheck __RPC_FAR * This,
    /* [string][in] */ WCHAR __RPC_FAR *pWord,
    /* [out] */ WCHAR __RPC_FAR pWordOut[ 32 ])
{

    HRESULT _RetVal;
    
    RPC_MESSAGE _RpcMessage;
    
    MIDL_STUB_MESSAGE _StubMsg;
    
    if(pWordOut)
        {
        MIDL_memset(
               pWordOut,
               0,
               sizeof( WCHAR [ 32 ] ));
        }
    RpcTryExcept
        {
        NdrProxyInitialize(
                      ( void __RPC_FAR *  )This,
                      ( PRPC_MESSAGE  )&_RpcMessage,
                      ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                      ( PMIDL_STUB_DESC  )&Object_StubDesc,
                      3);
        
        
        
        if(!pWord)
            {
            RpcRaiseException(RPC_X_NULL_REF_POINTER);
            }
        RpcTryFinally
            {
            
            _StubMsg.BufferLength = 12U;
            NdrConformantStringBufferSize( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                           (unsigned char __RPC_FAR *)pWord,
                                           (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxyGetBuffer(This, &_StubMsg);
            NdrConformantStringMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                                         (unsigned char __RPC_FAR *)pWord,
                                         (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4] );
            
            NdrProxySendReceive(This, &_StubMsg);
            
            if ( (_RpcMessage.DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
                NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[18] );
            
            NdrFixedArrayUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                     (unsigned char __RPC_FAR * __RPC_FAR *)&pWordOut,
                                     (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[6],
                                     (unsigned char)0 );
            
            _RetVal = *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++;
            
            }
        RpcFinally
            {
            NdrProxyFreeBuffer(This, &_StubMsg);
            
            }
        RpcEndFinally
        
        }
    RpcExcept(_StubMsg.dwStubPhase != PROXY_SENDRECEIVE)
        {
        NdrClearOutParameters(
                         ( PMIDL_STUB_MESSAGE  )&_StubMsg,
                         ( PFORMAT_STRING  )&__MIDL_TypeFormatString.Format[6],
                         ( void __RPC_FAR * )pWordOut);
        _RetVal = NdrProxyErrorHandler(RpcExceptionCode());
        }
    RpcEndExcept
    return _RetVal;
}

void __RPC_STUB ISpellCheck_CheckWord_Stub(
    IRpcStubBuffer *This,
    IRpcChannelBuffer *_pRpcChannelBuffer,
    PRPC_MESSAGE _pRpcMessage,
    DWORD *_pdwStubPhase)
{
    WCHAR _AM15[ 32 ];
    HRESULT _RetVal;
    MIDL_STUB_MESSAGE _StubMsg;
    WCHAR __RPC_FAR *pWord;
    WCHAR ( __RPC_FAR *pWordOut )[ 32 ];
    
NdrStubInitialize(
                     _pRpcMessage,
                     &_StubMsg,
                     &Object_StubDesc,
                     _pRpcChannelBuffer);
    ( WCHAR __RPC_FAR * )pWord = 0;
    pWordOut = 0;
    RpcTryFinally
        {
        if ( (_pRpcMessage->DataRepresentation & 0X0000FFFFUL) != NDR_LOCAL_DATA_REPRESENTATION )
            NdrConvert( (PMIDL_STUB_MESSAGE) &_StubMsg, (PFORMAT_STRING) &__MIDL_ProcFormatString.Format[18] );
        
        NdrConformantStringUnmarshall( (PMIDL_STUB_MESSAGE) &_StubMsg,
                                       (unsigned char __RPC_FAR * __RPC_FAR *)&pWord,
                                       (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[4],
                                       (unsigned char)0 );
        
        pWordOut = &_AM15;
        
        *_pdwStubPhase = STUB_CALL_SERVER;
        _RetVal = (((ISpellCheck*) ((CStdStubBuffer *)This)->pvServerObject)->lpVtbl) -> CheckWord(
             (ISpellCheck *) ((CStdStubBuffer *)This)->pvServerObject,
             pWord,
             *pWordOut);
        
        *_pdwStubPhase = STUB_MARSHAL;
        
        _StubMsg.BufferLength = 64U + 10U;
        NdrStubGetBuffer(This, _pRpcChannelBuffer, &_StubMsg);
        NdrFixedArrayMarshall( (PMIDL_STUB_MESSAGE)& _StubMsg,
                               (unsigned char __RPC_FAR *)*pWordOut,
                               (PFORMAT_STRING) &__MIDL_TypeFormatString.Format[6] );
        
        *(( HRESULT __RPC_FAR * )_StubMsg.Buffer)++ = _RetVal;
        
        }
    RpcFinally
        {
        }
    RpcEndFinally
    _pRpcMessage->BufferLength = 
        (unsigned int)((long)_StubMsg.Buffer - (long)_pRpcMessage->Buffer);
    
}


static const MIDL_STUB_DESC Object_StubDesc = 
    {
    0,
    NdrOleAllocate,
    NdrOleFree,
    0,
    0,
    0,
    0,
    0,
    __MIDL_TypeFormatString.Format,
    1, /* -error bounds_check flag */
    0x10001, /* Ndr library version */
    0,
    0x50100a4, /* MIDL Version 5.1.164 */
    0,
    0,
    0,  /* notify & notify_flag routine table */
    1,  /* Flags */
    0,  /* Reserved3 */
    0,  /* Reserved4 */
    0   /* Reserved5 */
    };

const CINTERFACE_PROXY_VTABLE(4) _ISpellCheckProxyVtbl = 
{
    &IID_ISpellCheck,
    IUnknown_QueryInterface_Proxy,
    IUnknown_AddRef_Proxy,
    IUnknown_Release_Proxy ,
    ISpellCheck_CheckWord_Proxy
};


static const PRPC_STUB_FUNCTION ISpellCheck_table[] =
{
    ISpellCheck_CheckWord_Stub
};

const CInterfaceStubVtbl _ISpellCheckStubVtbl =
{
    &IID_ISpellCheck,
    0,
    4,
    &ISpellCheck_table[-3],
    CStdStubBuffer_METHODS
};

#pragma data_seg(".rdata")

#if !defined(__RPC_WIN32__)
#error  Invalid build platform for this stub.
#endif

static const MIDL_PROC_FORMAT_STRING __MIDL_ProcFormatString =
    {
        0,
        {
			0x53,		/* FC_RETURN_PARAM_BASETYPE */
			0x8,		/* FC_LONG */
/*  2 */	
			0x4d,		/* FC_IN_PARAM */
#ifndef _ALPHA_
			0x1,		/* x86, MIPS & PPC Stack size = 1 */
#else
			0x2,		/* Alpha Stack size = 2 */
#endif
/*  4 */	NdrFcShort( 0x2 ),	/* Type Offset=2 */
/*  6 */	0x53,		/* FC_RETURN_PARAM_BASETYPE */
			0x8,		/* FC_LONG */
/*  8 */	
			0x4d,		/* FC_IN_PARAM */
#ifndef _ALPHA_
			0x1,		/* x86, MIPS & PPC Stack size = 1 */
#else
			0x2,		/* Alpha Stack size = 2 */
#endif
/* 10 */	NdrFcShort( 0x2 ),	/* Type Offset=2 */
/* 12 */	
			0x4d,		/* FC_IN_PARAM */
#ifndef _ALPHA_
			0x1,		/* x86, MIPS & PPC Stack size = 1 */
#else
			0x2,		/* Alpha Stack size = 2 */
#endif
/* 14 */	NdrFcShort( 0x2 ),	/* Type Offset=2 */
/* 16 */	0x53,		/* FC_RETURN_PARAM_BASETYPE */
			0x8,		/* FC_LONG */
/* 18 */	
			0x4d,		/* FC_IN_PARAM */
#ifndef _ALPHA_
			0x1,		/* x86, MIPS & PPC Stack size = 1 */
#else
			0x2,		/* Alpha Stack size = 2 */
#endif
/* 20 */	NdrFcShort( 0x2 ),	/* Type Offset=2 */
/* 22 */	
			0x51,		/* FC_OUT_PARAM */
#ifndef _ALPHA_
			0x1,		/* x86, MIPS & PPC Stack size = 1 */
#else
			0x2,		/* Alpha Stack size = 2 */
#endif
/* 24 */	NdrFcShort( 0x6 ),	/* Type Offset=6 */
/* 26 */	0x53,		/* FC_RETURN_PARAM_BASETYPE */
			0x8,		/* FC_LONG */

			0x0
        }
    };

static const MIDL_TYPE_FORMAT_STRING __MIDL_TypeFormatString =
    {
        0,
        {
			NdrFcShort( 0x0 ),	/* 0 */
/*  2 */	
			0x11, 0x8,	/* FC_RP [simple_pointer] */
/*  4 */	
			0x25,		/* FC_C_WSTRING */
			0x5c,		/* FC_PAD */
/*  6 */	
			0x1d,		/* FC_SMFARRAY */
			0x1,		/* 1 */
/*  8 */	NdrFcShort( 0x40 ),	/* 64 */
/* 10 */	0x5,		/* FC_WCHAR */
			0x5b,		/* FC_END */

			0x0
        }
    };

const CInterfaceProxyVtbl * _dictionary_ProxyVtblList[] = 
{
    ( CInterfaceProxyVtbl *) &_IDictionaryProxyVtbl,
    ( CInterfaceProxyVtbl *) &_ISpellCheckProxyVtbl,
    0
};

const CInterfaceStubVtbl * _dictionary_StubVtblList[] = 
{
    ( CInterfaceStubVtbl *) &_IDictionaryStubVtbl,
    ( CInterfaceStubVtbl *) &_ISpellCheckStubVtbl,
    0
};

PCInterfaceName const _dictionary_InterfaceNamesList[] = 
{
    "IDictionary",
    "ISpellCheck",
    0
};


#define _dictionary_CHECK_IID(n)	IID_GENERIC_CHECK_IID( _dictionary, pIID, n)

int __stdcall _dictionary_IID_Lookup( const IID * pIID, int * pIndex )
{
    IID_BS_LOOKUP_SETUP

    IID_BS_LOOKUP_INITIAL_TEST( _dictionary, 2, 1 )
    IID_BS_LOOKUP_RETURN_RESULT( _dictionary, 2, *pIndex )
    
}

const ExtendedProxyFileInfo dictionary_ProxyFileInfo = 
{
    (PCInterfaceProxyVtblList *) & _dictionary_ProxyVtblList,
    (PCInterfaceStubVtblList *) & _dictionary_StubVtblList,
    (const PCInterfaceName * ) & _dictionary_InterfaceNamesList,
    0, // no delegation
    & _dictionary_IID_Lookup, 
    2,
    1,
    0, /* table of [async_uuid] interfaces */
    0, /* Filler1 */
    0, /* Filler2 */
    0  /* Filler3 */
};
